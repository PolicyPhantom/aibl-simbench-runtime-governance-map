# AIBL / SimBench Runtime Governance Map
## Japanese Companion Localization & Implementation Package v0.1

**Status:** Codex-ready localization package  
**Date:** 2026-09-24 (JST)  
**Baseline:** English Governance Map v0.1, local commit `6e9fa54`  
**Primary rule:** English remains the canonical public wording. Japanese is a faithful explanatory companion.  
**Scope:** Japanese companion only. No redesign of the English map.

---

# 1. Purpose

Add a Japanese companion to the existing English AIBL / SimBench Runtime Governance Map without changing its research structure, claim strength, or interaction model.

The Japanese version should reduce the reading cost for Japanese researchers, engineers, policy practitioners, and public-sector readers while preserving direct correspondence with:

- AIBL research series v5.0;
- SimBench v1.0.0;
- the English Governance Map;
- the public artifact terminology and claim boundary.

The Japanese page is **not** a simplified reinterpretation and must not make the claims stronger than the English page.

Target relationship:

```text
English
= canonical public wording

Japanese
= faithful explanatory companion
```

---

# 2. High-Level Implementation Policy

Use the existing repository.

Recommended public structure:

```text
/
├─ index.html                 # English / default
├─ styles.css                 # shared
├─ content.js                 # English
├─ app.js                     # shared
├─ README.md
├─ ja/
│  ├─ index.html              # Japanese companion
│  └─ content.js              # Japanese content + Japanese UI strings
└─ docs/
   ├─ AIBL_SimBench_Runtime_Governance_Map_Codex_Implementation_Spec_v0.1_20260922.md
   └─ AIBL_SimBench_Governance_Map_Japanese_Localization_Package_v0.1_20260924.md
```

Do **not** create a separate repository.

Do **not** introduce:
- frameworks;
- Node/build tools;
- CDN;
- runtime translation;
- external localization libraries;
- automatic language detection;
- browser-locale redirection;
- query-parameter routing.

Both versions must continue to work under `file://`.

Language navigation should be explicit and boring:

```text
English page:   日本語
Japanese page: English
```

A small text link in the masthead is sufficient.

---

# 3. Research-Term Translation Rules

## 3.1 Canonical tokens that remain unchanged

Do not translate these runtime / artifact tokens:

```text
AIBL
SimBench
ALLOW
HOLD
DENY
SUSPENDED
EFFECT_MISMATCH
SIMULATION_LIMITED
E1 / E2 / E3 / E4
Phase 0–4
P0–2 / P3 / P4
Tier 1 / Tier 2
v1.0.0
v5.0
```

They may be explained in Japanese, but the token itself stays intact.

## 3.2 Preferred terminology

| English | Japanese companion | Rule |
|---|---|---|
| Runtime Governance | **実行時ガバナンス（Runtime Governance）** | First important occurrence keeps English. |
| Operational Translation | **運用的翻訳（Operational Translation）** | Core v5.0 term. Explanatory prose may add “概念を実行可能な形へ落とし込む”. |
| Executable Semantics | **実行可能な意味論** | Keep stable across page. |
| Conceptual Model | **概念モデル** | |
| Capability | **能力** | Do not replace with “性能”. |
| Permission | **許可** | Keep distinct from enforcement. |
| Assurance | **アシュアランス（Assurance）** | Do not translate as “安全保証”. |
| Governance Permission | **ガバナンス上の許可** | Do not imply that permission and enforcement are the same. |
| Runtime Enforcement | **実行時制御（Runtime Enforcement）** | First detailed occurrence may retain English. |
| Behavior Permission | **行動許可** | |
| Behavior Permission Class | **行動許可クラス** | |
| Permission State | **許可状態** | |
| Physical Operational Envelope | **物理運用条件範囲（Physical Operational Envelope）** | First occurrence keeps English. |
| State Transition | **状態遷移** | |
| Re-entry | **再進入（Re-entry）** | Retain original on first important occurrence. |
| Revalidation | **再検証** | |
| Re-authorisation | **再認可** | Use only where the English concept is re-authorisation. |
| Evidence | **証拠 / 証跡** | Use “証拠” for decision inputs/basis; “証跡” for retained audit records. |
| Evidence / Replay | **証拠・リプレイ（記録再照合）** | Never translate replay as simple media “再生”. |
| Reconstruction | **再構成** | State exactly what level is reconstructed. |
| Claim Boundary | **主張範囲** | Preferred over “主張限界”. |
| Theory Feedback | **理論へのフィードバック** | |
| Conflict / Precedence | **競合・優先順位** | |
| Temporal Validity | **時間的有効性** | |
| Freshness | **最新性 / 時間的有効性** | Use by context. |
| Identity | **同一性** | |
| Binding | **結び付け（Binding）** | “拘束” is not preferred here. |
| Provenance | **由来情報（Provenance）** | First important occurrence keeps English. |
| Human Gate | **人間による承認ゲート（Human Gate）** | Do not reduce to simple “確認”. |
| Question Map | **問いの整理マップ** | |
| Focus View | **集中表示** | |
| Automation & Tooling | **自動化・支援ツール** | |
| Bounded Executable Artifact | **範囲を限定した実行可能アーティファクト** | Explanatory prose. |
| Comparative Conceptual Integration | **比較を通じた概念統合** | |

## 3.3 Important non-equivalences

Preserve these as explicit distinctions.

```text
能力 ≠ 許可
Capability ≠ Permission
```

```text
最新であること
≠
正しい対象についての情報であること
```

```text
ハッシュ一致
≠
現実世界の事実が真であること
```

```text
技術的復旧
≠
現在の許可
```

```text
状態復元
≠
次の通常動作の自動実行
```

```text
公開実装を確認できること
≠
過去の実行を独立再現したこと
```

```text
SIMULATION_LIMITEDの固定ケース結果
≠
実世界の安全確率
```

---

# 4. Japanese UI Tone

Target tone:

> **研究者が、専門外の技術者・政策担当者にも意味が通るよう説明する日本語**

Avoid:
- bureaucratic legalese;
- excessive katakana;
- casual blog slang;
- marketing language;
- claims such as “革新的”, “世界初”, “新しいアーキテクチャ”;
- translation that collapses Permission and Enforcement.

Japanese can be slightly more explanatory than English, but must not add new scientific claims.

---

# 5. Persistent UI — Exact Japanese Draft

## 5.1 Document metadata

Suggested:

```html
<html lang="ja">
<title>AIBL / SimBench — 実行時ガバナンス・マップ</title>
```

Meta description:

> AIBLの概念的ガバナンスから、SimBenchの実行可能な意味論、証拠、理論へのフィードバックまでをたどる視覚マップ。

## 5.2 Skip link

English:
`Skip to the concept map`

Japanese:
`概念マップへ移動`

## 5.3 Masthead

```text
AIBL / SimBench
研究ナビゲーション · v0.1
English
```

The `English` link points to `../index.html`.

## 5.4 Hero

Eyebrow:

```text
概念から実行可能な意味論へ
```

Page title:

```text
実行時ガバナンス・マップ
```

Versions:

```text
AIBL research series v5.0 / SimBench v1.0.0
```

Keep version names in English.

Hero question:

> **AIガバナンスの概念を、実行可能な形へ落とし込むと何が起きるのか？**

Hero description:

> 概念的ガバナンスから、実行可能な意味論、証拠、理論へのフィードバックまでをたどる視覚マップ。

Claim-boundary chip:

```text
SIMULATION_LIMITED ↗
```

Untranslated.

---

# 6. Research Loop — Exact Japanese Draft

Use:

```text
01 / 概念
AIBL 概念モデル

→

02 / 翻訳
運用的翻訳

→

03 / 明示化
実行可能な意味論

↓

04 / 実装
SimBench v1.0.0

←

05 / 確認
証拠・確認

←

06 / 改良
理論へのフィードバック

↑ AIBLの改良へ戻る
```

## Tooltips

### AIBL concept

> 現在の行動許可を、技術的能力とは区別して捉えます。

### Operational Translation

> 暗黙のガバナンス上の前提を、実行できるほど明示的な形へ落とし込みます。

### Executable Semantics

> 判断、同一性、時間、競合、再進入などに、実行可能な意味を与えます。

### SimBench

> Phase 0–4を対象とする、範囲を限定した決定論的シミュレーション・アーティファクトです。

### Evidence / Inspection

> 実装、検証構造、報告結果、解釈を区別して確認します。

### Theory Feedback

> 明示化された前提と限定的な知見を、AIBLの改良へ戻します。

---

# 7. Hero Navigation — Exact Japanese Draft

```text
実行時の意味論 ↗
証拠と主張範囲 ↗
問いの整理マップ ↗
自動化・支援ツール ↗
```

ARIA labels should also be Japanese in `ja/index.html`.

---

# 8. Second Layer — Exact Japanese Draft

Eyebrow:

```text
概念マップ
```

Heading:

```text
全体像の中での位置づけ
```

Description:

> AIBL / SimBenchの研究構造を、4つの領域で整理します。

---

# 9. Card 1 — Japanese Draft

Eyebrow:

```text
01 / 概念
```

Title:

```text
AIBL
概念モデル
```

Core distinction:

```text
能力 ≠ 許可
```

Mini-flow:

```text
アシュアランス
↓
ガバナンス上の許可
↓
実行時制御
```

Explore:

```text
AIBLを見る →
```

ARIA:

```text
AIBL概念モデルの詳細を開く
```

---

# 10. Card 2 — Japanese Draft

Eyebrow:

```text
02 / 翻訳
```

Title:

```text
運用的翻訳
```

Mini-flow:

```text
概念 → 意味論 → ルール → シナリオ → 証拠
```

Labels:

```text
同一性 · 時間
競合 · 再進入
```

Explore:

```text
運用的翻訳を見る →
```

ARIA:

```text
運用的翻訳の詳細を開く
```

---

# 11. Card 3 — Japanese Draft

Eyebrow:

```text
03 / アーティファクト
```

Title:

```text
SimBench
実行アーティファクト
```

Phase preview:

```text
P0–2  基礎
P3     境界
P4     最新性
```

Labels:

```text
判断 · 状態遷移
再進入 · 証拠
```

Explore:

```text
SimBenchを見る →
```

ARIA:

```text
SimBench実行アーティファクトの詳細を開く
```

---

# 12. Card 4 — Japanese Draft

Eyebrow:

```text
04 / 証拠
```

Title:

```text
証拠と
理論へのフィードバック
```

Preview:

```text
E1  実装
E2  検証
E3  報告結果
E4  解釈
```

Caption:

```text
証拠 → フィードバック ↺
```

Explore:

```text
証拠を見る →
```

ARIA:

```text
証拠と理論へのフィードバックの詳細を開く
```

---

# 13. Post-Phase4 Tooling Strip — Japanese Draft

Heading:

```text
PHASE 4後の支援ツール
```

Description:

> SimBench v1.0.0の研究アーティファクト本体とは分離された運用支援レイヤーです。

Control:

```text
Tier 1
実行前

→

Tier 2
実行後

→

Human Gate
人間が判断
```

ARIA:

> 自動化・支援ツールを開く。Tier 1は実行前、Tier 2は実行後、Human Gateは人間が判断する。

---

# 14. Footer — Japanese Draft

```text
AIBL / SimBench 実行時ガバナンス・マップ
研究ナビゲーション
AIBL research series v5.0 · SimBench v1.0.0

SIMULATION_LIMITED

Mapped in Osaka.
```

Keep `Mapped in Osaka.` unchanged as the subtle project easter egg.

Noscript:

> 研究マップ自体はJavaScriptなしでも表示されます。詳細ビューを利用するにはJavaScriptを有効にしてください。

---

# 15. Drawer Controls — Exact Japanese Draft

```text
← マップへ戻る
集中表示
集中表示を終了
閉じる
研究ループへ戻る ↑
```

ARIA label for close:

```text
詳細表示を閉じる
```

---

# 16. Drawer 1 — AIBL Conceptual Model

Title:

```text
AIBL 概念モデル
```

Chips:

```text
AIBL
概念レイヤー
行動単位ガバナンス
```

Purpose:

> 現在の行動許可が、概念的なガバナンスモデルのどこに位置するかを確認します。

## AIBLとは？

> AIBLは、現在の行動許可を、技術的能力やシステム全体に対する承認とは区別して扱います。

## 中心となる区別

```text
能力 ≠ 許可
(Capability ≠ Permission)
```

## 概念の流れ

```text
アシュアランス
↓
ガバナンス上の許可
↓
実行時制御
↓
観測された結果
↓
見直し / 再検証
```

## 主要概念

```text
行動許可クラス
許可状態
物理運用条件範囲（Physical Operational Envelope）
停止
再検証
再進入（Re-entry）
```

For `Suspension`, prefer **停止 / SUSPENDEDへの遷移** in explanatory prose. Do not imply every stop is the exact `SUSPENDED` state.

## まだ抽象的なまま残る問い

```text
「現在有効」とは、具体的に何を意味するのか？
入力が競合した場合、何が起きるのか？
どの証拠があれば十分なのか？
再進入が成功したとは、具体的に何を意味するのか？
```

Related:

```text
運用的翻訳へ進む →
```

---

# 17. Drawer 2 — Operational Translation

Title:

```text
運用的翻訳
```

Chips:

```text
v5.0 中核
運用的翻訳
意味論
```

Purpose:

> ガバナンス判断の背後にある前提を、実行できるほど明示的にします。

Lead:

> **ガバナンスを実行可能にする前に、何を明示しなければならないのか？**

## 7つの意味論的次元

### 01 — 判断状態

- `ALLOW` は、モデル化された動作を許可します。
- `HOLD` は、必要な根拠が未確定な間、実行を保留します。
- `DENY` は、たとえば明示的な禁止条件のもとで実行を拒否します。
- `HOLD` と `DENY` は、どちらも非実行につながり得ますが、その理由は異なり、相互に置き換えられるものではありません。
- 判断結果（verdict）と実行時の状態（runtime state）は別の概念です。

### 02 — 同一性・結び付け・由来情報

- 入力が、どの主体、対象、情報源、イベント、ポリシー、アーティファクトを指しているのかを確立します。
- 時間的に新しい入力でも、別の対象を指していれば利用できない場合があります。
- Bindingは、指定された対応関係を確立するものであり、現実世界の真実そのものを証明するものではありません。

Note:

> ハッシュ一致は真実を意味せず、マニフェスト一致は正当な承認を意味しません。

### 03 — 時間的有効性

Intro:

> 入力ファミリーごとに、異なる時間的契約を用いる場合があります。

Example remains technically unchanged:

```text
Authority:
valid_from <= now < valid_until

Observation-like input:
0 <= age <= max_age
```

Note:

> 新しいタイムスタンプだけでは、その観測が正しいことは確立されません。

### 04 — 競合・優先順位

- 確立済みの入力同士が一致しない場合があります。
- 未解決の競合は`HOLD`につながり得ます。
- 明示的な禁止は`DENY`につながり得ます。
- ローカルな分岐順序は、普遍的な競合解決体系ではありません。

### 05 — 失敗・状態遷移

Flow:

```text
ALLOW
↓
観測された結果
↓
EFFECT_MISMATCH
↓
SUSPENDED
```

Note:

> 元の判断を後から`DENY`へ書き換えるのではなく、観測結果の不一致によって、その後の状態を変更します。

### 06 — 再進入

Flow:

```text
SUSPENDED
↓
現在の前提条件
↓
AND条件による確認
↓
RUNNING
```

- 技術的に復旧しただけでは、許可は自動的に回復しません。
- 状態の復元に成功しても、次の通常動作が自動実行されるわけではありません。

Note:

> アーティファクトで用いる10要素の前提条件セットは、対象ケースに限定されたものです。すべての実システムに対して十分であるとは主張しません。

### 07 — 証拠・リプレイ（記録再照合）

- Completenessは、必要な証拠が揃っているかを確認します。
- Integrityは、保持された証拠が指定された完全性条件を満たすかを確認します。
- raw identityとcanonical identityを区別し、何を基準に比較するかを明示します。
- 保持された記録同士の比較は、限定的な再構成を支援します。

Note:

> 証拠の再構成は、独立した認証や物理世界の真実を意味しません。

## なぜ重要なのか

> ガバナンス概念は文章として意味を持っていても、そのままでは実行するには曖昧すぎる場合があります。

Related:

```text
SimBenchへ進む →
```

---

# 18. Drawer 3 — SimBench Runtime Artifact

Title:

```text
SimBench 実行アーティファクト
```

Chips:

```text
SIMBENCH v1.0.0
PHASE 0–4
SIMULATION_LIMITED
```

Purpose:

> 範囲を限定した実行可能アーティファクトと、その実行時構造を確認します。

## アーティファクトの状態

```text
アーティファクト   v1.0.0
範囲               Phase 0–4
モード             決定論的シミュレーション
主張範囲           SIMULATION_LIMITED
```

## Phase構造

### P0–2 — ガバナンス構造の基礎

```text
判断の意味
構造化された入力
行動スコープ
証拠 / 証跡の基礎
判断と実行時制御の分離
状態遷移の前提
決定論的フィクスチャ
```

### P3 — 敵対的ガバナンス境界

```text
HOLD / DENYの分離
競合処理
同一性 / Manifestの結び付け
証拠の完全性
AND条件による再進入
物理観測
Effect mismatch → SUSPENDED
No silent retry
Human Gate / controlled closure
```

These project tokens may remain partly English when they are established labels.

### P4 — 最新性境界

```text
Authority
Remediation Evidence
Physical Observation
Risk Context
```

Note:

> 入力ファミリーごとに、異なる時間的意味論と失敗時の意味を持ちます。

## 実行時フロー

### 通常動作

```text
構造化されたContext
↓
ガバナンス判断
↓
ALLOW / HOLD / DENY
↓
実行 / 非実行
↓
観測された結果
↓
状態遷移
↓
証拠 / 証跡
```

Note:

> これは模式的な流れです。`ALLOW`はモデル化された動作を許可し、`HOLD / DENY`ではその動作を実行しません。観測結果の処理は、実際に実行された動作に対して適用されます。

### 再進入

```text
SUSPENDED
↓
現在の前提条件
↓
AND条件による確認
↓
RUNNING
```

```text
状態復元のみ
通常の物理動作を自動実行しない
```

Note:

> 復旧しただけでは許可は回復しません。また、モデル化された前提条件セットは普遍的な十分条件ではありません。

## 主張範囲

> `SIMULATION_LIMITED` — 決定論的な固定ケースによって、実行可能な意味論を確認できるようにしています。実世界のPhysical AI安全性、production readiness、certificationを確立するものではありません。

Related:

```text
証拠を見る →
```

---

# 19. Drawer 4 — Evidence & Theory Feedback

Title:

```text
証拠と理論へのフィードバック
```

Chips:

```text
トレーサビリティ
E1–E4
主張範囲
SIMULATION_LIMITED
```

Purpose:

> 直接確認できるもの、過去記録として報告されたもの、研究上の解釈を分けて確認します。

## 証拠・解釈の区分

Intro:

> E1–E4は、証拠や解釈の種類を分ける並列カテゴリです。強さの順位ではありません。

### E1 — 公開実装として直接確認可能

```text
ソースロジック
状態定義
同一性 / 最新性 / 再進入の意味論
Effect mismatch処理
```

### E2 — 公開された検証・リプレイ構造

```text
テスト定義
検証ロジック
ハッシュ / Binding
リプレイ関連構造
```

### E3 — 過去記録として報告された結果

```text
Phase 3: 60/60
Phase 4: 42/42
Public suite: 614/614
```

Note:

> 過去記録／リリース記録に基づく報告値です。v5.0研究内で独立再現した測定値ではありません。`SIMULATION_LIMITED`であり、実世界の安全確率ではありません。

### E4 — 概念的推論

```text
型付けされたcurrentness
再構成レベル
限定的な理論改良
より広い解釈上の提案
```

## 主張範囲

### 確認・裏付け可能

```text
明示された実行可能な意味論
決定論的な固定ケース
追跡可能な判断構造
限定されたリプレイ / 検証構造
理論へのフィードバック
```

### 確立されていない

```text
実世界のPhysical AI安全性
本番運用への準備完了
認証
オープンワールドへの一般化
物理世界の事実が真であること
外部権限の法的正当性
普遍的な競合解決
マルチエージェント・ガバナンスの有効性
```

## Bindingは真実ではない

```text
ハッシュ一致 ≠ 真実
新しいタイムスタンプ ≠ 正しい観測
マニフェスト一致 ≠ 正当な承認
```

## 理論へのフィードバック

```text
実装
↓
暗黙の前提が明示される
↓
理論と比較する
↓
改良 / 限定 / 実装上の限界として保持
↓
↺ AIBLの改良へ戻る
```

Related:

```text
AIBL概念モデルへ戻る →
```

---

# 20. Question Map — Japanese Draft

Title:

```text
問いの整理マップ
```

Chips:

```text
方向づけ
隣接する問い
```

Purpose:

> 用語が似ている研究を、主にどの問いを扱っているかで整理します。

## どの問いを扱っているのか？

```text
モデル評価（Model Evaluation）
モデルは何ができるのか？

実行可否の選別（Execution Selectivity）
この操作を通すべきか？

実行時ガバナンス（Runtime Governance）
実行の根拠は現在も成立しているか？

運用的翻訳（Operational Translation）
その判断を実行可能にするため、何を明示する必要があるか？

ガバナンス・アシュアランス（Governance Assurance）
後から何を確認・再構成できるか？
```

## 方向づけのための補助

> 異なる研究が同じような機構を扱っていても、中心となる問いが異なる場合があります。このマップは位置づけを助けるためのものであり、普遍的な分類体系でも、システムの順位付けでもありません。

Related:

```text
運用的翻訳を見る →
```

---

# 21. Automation & Tooling — Japanese Draft

Title:

```text
自動化・支援ツール
```

Chips:

```text
PHASE 4後
支援ツール
別レイヤー
```

Purpose:

> 人間の判断権限を明示的に残したまま、制御された作業の前後を支援する仕組みです。

## 分離された運用支援レイヤー

> Phase 4後の支援ツールは、SimBench v1.0.0のPhase 0–4研究アーティファクト本体とは別物です。Tier 1 / Tier 2はPhase 4の実行時意味論ではなく、この支援ツール群はPhase 5でもありません。

Flow:

```text
Tier 1 / 実行前
↓
Tier 2 / 実行後
↓
Human Gate / 人間が判断
```

## Tier 1 — 実行前

> 制御された作業を始める前に、環境が受け入れ可能な状態かを確認します。

```text
Git状態
同一性 / ハッシュ検証
Preflight checks
Read-only boundary checks
```

## Tier 2 — 実行後

> 制御された実行の後に、生成された証拠を検証・集約します。

```text
Postflight checks
Formal run aggregation
証拠の意味的検証
Closure draft generation
```

Note:

> hardening後のTier 2は、ハッシュや件数だけを信頼せず、指定された不正形式や矛盾した証拠を拒否します。

## Human Gate — 人間が判断

```text
Formal GO
逸脱受理
Closure受理
公開 / リリース判断
```

Note:

> 自動化はFormal実行やClosureを自律的に承認しません。

## 境界

> **自動化は検証を支援する。判断権限は人間に明示的に残す。**

---

# 22. Shared app.js Localization Hook

The English app currently contains a small number of visible strings that are generated dynamically.

Do not duplicate the entire app into `app-ja.js`.

Instead, add a minimal optional localization object while preserving English defaults.

Concept:

```js
var ui = Object.assign({
  focus: "Focus",
  exitFocus: "Exit Focus",
  supportedInspectable: "Supported / inspectable",
  notEstablished: "Not established"
}, window.GovernanceMapUIStrings || {});
```

Then use these values where the current English strings are hard-coded.

Japanese `ja/content.js` should define:

```js
window.GovernanceMapUIStrings = {
  focus: "集中表示",
  exitFocus: "集中表示を終了",
  supportedInspectable: "確認・裏付け可能",
  notEstablished: "確立されていない"
};
```

`SIMULATION_LIMITED` stays unchanged and does not need localization.

This is the only intended JavaScript behavior change.

English behavior must remain functionally identical.

---

# 23. Language Switch

Add a very small language link to the masthead.

English:

```text
日本語
```

Target:

```text
ja/index.html
```

Japanese:

```text
English
```

Target:

```text
../index.html
```

Rules:
- no flags required;
- no dropdown;
- no automatic redirect;
- no localStorage required;
- no language detection;
- keyboard accessible;
- understated styling consistent with the current masthead.

---

# 24. Styling for Japanese

Reuse the existing visual design.

Do not redesign.

Allow:
- slightly taller Japanese cards where required;
- line breaks where Japanese wording needs breathing room;
- `word-break: normal`;
- `overflow-wrap: anywhere` only where necessary for technical tokens;
- Japanese system fonts as fallback.

Suggested font stack addition:

```css
"Yu Gothic UI",
"Yu Gothic",
"Hiragino Kaku Gothic ProN",
"Meiryo",
sans-serif
```

Do not reduce font size simply to force Japanese text into the English geometry.

If Japanese text needs more space, prefer:
1. natural line wrapping;
2. slightly increased card/drawer height;
3. modest spacing adjustment.

---

# 25. Semantic Guardrails for Japanese

The Japanese companion must preserve these boundaries.

## Permission is not enforcement

Do not translate language in a way that implies:

```text
Governance Permission = technical execution
```

## Currentness is typed and bound

Do not reduce family-specific temporal validity to:

```text
newer = valid
```

## Binding is not truth

Keep explicit:

```text
Binding ≠ physical truth / lawful authority
```

## HOLD and DENY differ

Do not translate both as a generic “拒否”.

Recommended:
- HOLD = **保留**
- DENY = **拒否 / 禁止に基づく非許可**

Keep tokens visible.

## Re-entry is restoration, not next action

Do not say that successful Re-entry automatically permits or executes the next action.

## Evidence categories are not ranks

Do not render E1→E4 with arrows suggesting increasing strength.

## Historical totals remain bounded

Whenever 60/60, 42/42, 614/614 are shown, retain:
- historical/release-reported context;
- not independently reproduced in v5.0;
- SIMULATION_LIMITED;
- not real-world safety estimates.

## Automation remains separate

Do not merge Tier 1 / Tier 2 into:
- Phase 4;
- Phase 5;
- SimBench runtime semantics.

---

# 26. Implementation Change Budget

Preferred changed/added files:

```text
MODIFY
index.html      # add small 日本語 link only
styles.css      # minimal language-link + Japanese typography/layout support
app.js          # add four-string optional localization hook
README.md       # document English/Japanese local opening

ADD
ja/index.html
ja/content.js
docs/AIBL_SimBench_Governance_Map_Japanese_Localization_Package_v0.1_20260924.md
```

Do not modify English `content.js` unless a concrete issue requires it.

Do not alter the English scientific wording.

Do not redesign the English page.

---

# 27. Japanese Acceptance Criteria

## Language / content

- [ ] `ja/index.html` has `lang="ja"`.
- [ ] English remains the default root page.
- [ ] A visible but understated `English` link returns from Japanese to English.
- [ ] English root has a visible but understated `日本語` link.
- [ ] All persistent UI text is Japanese except deliberately preserved technical tokens.
- [ ] All six drawers have Japanese content.
- [ ] Seven semantic dimensions are present.
- [ ] Question Map is Japanese.
- [ ] Automation is Japanese and remains separate from SimBench.

## Semantics

- [ ] Capability ≠ Permission is preserved.
- [ ] HOLD and DENY remain distinct.
- [ ] verdict and runtime state remain distinct.
- [ ] Binding ≠ truth remains explicit.
- [ ] Re-entry restoration does not imply automatic ordinary action.
- [ ] E1–E4 remain parallel, not ranked.
- [ ] Historical totals retain source/release-reported qualification.
- [ ] SIMULATION_LIMITED remains visible and untranslated.
- [ ] Tier 1 / Tier 2 / Human Gate authority boundary remains explicit.

## Technical

- [ ] English and Japanese both work under `file://`.
- [ ] no fetch;
- [ ] no modules;
- [ ] no network dependency;
- [ ] no external localization library;
- [ ] shared app.js works in both languages;
- [ ] English Focus / boundary headings remain unchanged;
- [ ] Japanese Focus / boundary headings are localized;
- [ ] Esc, focus trap, Focus View, Back to Map work in Japanese;
- [ ] mobile 320px has no horizontal overflow;
- [ ] print preview remains readable;
- [ ] language links work under local file paths.

## Visual

- [ ] Japanese keeps the same warm-white / pale-blue / restrained-green design.
- [ ] no cyber UI.
- [ ] Japanese text is not shrunk excessively.
- [ ] Mapped in Osaka. remains subtle.

---

# 28. Recommended Codex Work Sequence

## Phase A — Read only

Before editing:
1. read the existing English project;
2. read this localization package;
3. report the exact planned file changes;
4. identify any Japanese text likely to overflow;
5. do not edit yet.

## Phase B — Shared localization hook

After approval:
1. add the minimal UI-string hook to `app.js`;
2. confirm English behavior remains identical.

## Phase C — Japanese page

1. create `ja/index.html`;
2. create `ja/content.js`;
3. add explicit language links;
4. reuse `styles.css` and shared `app.js`.

## Phase D — Japanese layout polish

Only if necessary:
- typography;
- wrapping;
- card heights;
- mobile layout.

Do not redesign.

## Phase E — Static checks

Report:
- files changed;
- network/external dependency status;
- syntax;
- English regression risk;
- Japanese acceptance status;
- known items requiring real-browser inspection.

Do not commit before human review.

---

# 29. Codex Do-Not-Invent Rules

Codex must not:
- add new claims;
- add a new Phase;
- reinterpret E1–E4;
- rewrite the English version for “consistency”;
- change numerical result qualifications;
- translate ALLOW/HOLD/DENY/SUSPENDED;
- translate SIMULATION_LIMITED;
- add automatic language redirects;
- add a localization dependency;
- add dark mode;
- add extra navigation panels;
- add external comparator names;
- turn the Japanese page into a simplified marketing page.

Where wording is uncertain, preserve the English term in parentheses rather than inventing a stronger Japanese concept.

---

## End of Package
