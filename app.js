/* Shared drawer and local detail controls. No modules, network, or external runtime. */
(function () {
  "use strict";

  var content = window.GovernanceMapContent;
  var ui = Object.assign({
    focus: "Focus",
    exitFocus: "Exit Focus",
    supportedInspectable: "Supported / inspectable",
    notEstablished: "Not established"
  }, window.GovernanceMapUIStrings || {});
  var map = document.getElementById("map-page");
  var overlay = document.getElementById("detail-overlay");
  var panel = document.getElementById("detail-panel");
  var title = document.getElementById("detail-title");
  var purpose = document.getElementById("detail-purpose");
  var chips = document.getElementById("detail-chips");
  var detail = document.getElementById("detail-content");
  var focusControl = document.getElementById("focus-control");
  var opener = null;
  var focused = false;

  function element(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function list(items, className, ordered) {
    var node = element(ordered ? "ol" : "ul", className);
    items.forEach(function (text) { node.appendChild(element("li", "", text)); });
    return node;
  }

  function flow(items, returnPath) {
    var node = list(items, "flow-list", true);
    if (returnPath) node.lastElementChild.classList.add("return-step");
    return node;
  }

  function renderOption(option, target) {
    target.appendChild(element("h4", "", (option.code ? option.code + " — " : "") + option.title));
    if (option.text) target.appendChild(element("p", "", option.text));
    if (option.flow) target.appendChild(flow(option.flow));
    if (option.example) {
      var pre = element("pre");
      pre.appendChild(element("code", "", option.example));
      target.appendChild(pre);
    }
    if (option.items) target.appendChild(list(option.items));
    if (option.labels) target.appendChild(list(option.labels, "label-list"));
    if (option.note) target.appendChild(element("p", "note", option.note));
  }

  function renderSelector(section, target) {
    var controls = element("div", "selector-buttons");
    controls.setAttribute("role", "group");
    controls.setAttribute("aria-label", section.title);
    target.appendChild(controls);
    section.options.forEach(function (option, index) {
      var id = section.id + "-" + index;
      var control = element("button");
      control.type = "button";
      control.id = id + "-control";
      control.setAttribute("aria-pressed", String(index === 0));
      control.setAttribute("aria-controls", id);
      if (option.code) control.appendChild(element("span", "", option.code));
      control.appendChild(document.createTextNode(option.title));
      var region = element("div", "choice-detail");
      region.id = id;
      region.setAttribute("role", "region");
      region.setAttribute("aria-labelledby", control.id);
      region.hidden = index !== 0;
      renderOption(option, region);
      control.addEventListener("click", function () {
        Array.prototype.forEach.call(controls.children, function (button) {
          var selected = button === control;
          button.setAttribute("aria-pressed", String(selected));
          document.getElementById(button.getAttribute("aria-controls")).hidden = !selected;
        });
      });
      controls.appendChild(control);
      target.appendChild(region);
    });
  }

  function renderSection(section) {
    var node = element("section", "detail-section");
    if (section.id) node.id = section.id;
    if (section.title) node.appendChild(element("h3", "", section.title));
    if (section.text && ["lead", "quote", "distinction"].indexOf(section.type) === -1) {
      node.appendChild(element("p", "", section.text));
    }
    switch (section.type) {
      case "lead":
      case "quote":
      case "distinction":
        node.appendChild(element("p", section.type === "lead" ? "lead-question" : section.type === "distinction" ? "concept-distinction" : "quote", section.text));
        break;
      case "flow":
        node.appendChild(flow(section.items, section.returnPath));
        break;
      case "labels":
        node.appendChild(list(section.items, "label-list"));
        break;
      case "list":
        node.appendChild(list(section.items));
        break;
      case "selector":
        renderSelector(section, node);
        break;
      case "status":
        var status = element("dl", "status-list");
        section.rows.forEach(function (row) {
          status.appendChild(element("dt", "", row[0]));
          status.appendChild(element("dd", "", row[1]));
        });
        node.appendChild(status);
        break;
      case "evidence":
        var grid = element("div", "evidence-grid");
        section.entries.forEach(function (entry) {
          var card = element("section", "evidence-item");
          card.appendChild(element("span", "evidence-code", entry.code));
          card.appendChild(element("h4", "", entry.title));
          card.appendChild(list(entry.items));
          if (entry.note) card.appendChild(element("p", "note", entry.note));
          grid.appendChild(card);
        });
        node.appendChild(grid);
        break;
      case "boundary":
        var intro = element("p", "boundary-intro");
        intro.appendChild(element("span", "chip", "SIMULATION_LIMITED"));
        node.appendChild(intro);
        var columns = element("div", "boundary-grid");
        [[ui.supportedInspectable, section.supported], [ui.notEstablished, section.notEstablished]].forEach(function (column) {
          var group = element("section", "boundary-column");
          group.appendChild(element("h4", "", column[0]));
          group.appendChild(list(column[1]));
          columns.appendChild(group);
        });
        node.appendChild(columns);
        break;
      case "questions":
        var questions = element("div", "question-list");
        section.entries.forEach(function (entry) {
          var question = element("section", "question-item");
          question.appendChild(element("h4", "", entry[0]));
          question.appendChild(element("p", "", entry[1]));
          questions.appendChild(question);
        });
        node.appendChild(questions);
        break;
      case "related":
        node.classList.add("related-section");
        var related = element("button", "related-control", section.label);
        related.type = "button";
        related.dataset.view = section.view;
        node.appendChild(related);
        break;
    }
    if (section.note) node.appendChild(element("p", "note", section.note));
    return node;
  }

  function renderView(key) {
    var view = content[key];
    title.textContent = view.title;
    purpose.textContent = view.purpose;
    chips.replaceChildren();
    detail.replaceChildren();
    view.chips.forEach(function (chip) { chips.appendChild(element("span", "chip", chip)); });
    view.sections.forEach(function (section) { detail.appendChild(renderSection(section)); });
  }

  function selectCard(key) {
    document.querySelectorAll(".map-card").forEach(function (card) {
      card.classList.toggle("is-selected", card.dataset.view === key);
    });
  }

  function setFocusMode(value) {
    focused = value;
    overlay.classList.toggle("focus-mode", value);
    focusControl.setAttribute("aria-pressed", String(value));
    focusControl.textContent = value ? ui.exitFocus : ui.focus;
  }

  function openView(key, trigger, sectionId) {
    if (!Object.prototype.hasOwnProperty.call(content, key)) return;
    if (overlay.hidden) {
      opener = trigger;
      setFocusMode(false);
    }
    renderView(key);
    selectCard(key);
    overlay.hidden = false;
    map.inert = true;
    document.body.classList.add("detail-open");
    panel.scrollTop = 0;
    title.focus({ preventScroll: true });
    if (sectionId) {
      var section = document.getElementById(sectionId);
      if (section && detail.contains(section)) {
        var heading = section.querySelector("h3");
        heading.tabIndex = -1;
        section.scrollIntoView({ block: "start" });
        heading.focus({ preventScroll: true });
      }
    }
  }

  function closeView() {
    if (overlay.hidden) return;
    overlay.hidden = true;
    map.inert = false;
    document.body.classList.remove("detail-open");
    setFocusMode(false);
    selectCard(null);
    if (opener && opener.isConnected) opener.focus({ preventScroll: true });
  }

  document.addEventListener("click", function (event) {
    var trigger = event.target.closest("button[data-view]");
    if (trigger) openView(trigger.dataset.view, trigger, trigger.dataset.section);
  });
  document.getElementById("close-control").addEventListener("click", closeView);
  document.getElementById("back-to-map").addEventListener("click", closeView);
  document.getElementById("backdrop").addEventListener("click", closeView);
  document.getElementById("back-to-loop").addEventListener("click", function () {
    closeView();
    var loop = document.getElementById("research-loop");
    loop.scrollIntoView({ block: "center" });
    loop.querySelector("button").focus({ preventScroll: true });
  });
  focusControl.addEventListener("click", function () {
    setFocusMode(!focused);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      if (!overlay.hidden) {
        event.preventDefault();
        closeView();
      }
      document.body.classList.add("tooltips-dismissed");
    }
    if (overlay.hidden || event.key !== "Tab") return;
    var controls = Array.prototype.filter.call(panel.querySelectorAll("button, a[href], [tabindex='0']"), function (control) {
      return !control.disabled && control.getClientRects().length > 0;
    });
    var first = controls[0];
    var last = controls[controls.length - 1];
    var active = document.activeElement;
    if (event.shiftKey && (active === first || controls.indexOf(active) === -1)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (active === last || controls.indexOf(active) === -1)) {
      event.preventDefault();
      first.focus();
    }
  });
  document.querySelectorAll(".loop-node").forEach(function (node) {
    ["pointerenter", "focusin"].forEach(function (eventName) {
      node.addEventListener(eventName, function () { document.body.classList.remove("tooltips-dismissed"); });
    });
  });
}());
