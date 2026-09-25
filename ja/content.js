/* Japanese explanatory companion. English root content remains canonical. */
"use strict";
window.GovernanceMapUIStrings = {
  "focus": "集中表示",
  "exitFocus": "集中表示を終了",
  "supportedInspectable": "確認・裏付け可能",
  "notEstablished": "確立されていない"
};

window.GovernanceMapContent = {
  "aibl": {
    "title": "AIBL 概念モデル",
    "chips": [
      "AIBL",
      "概念レイヤー",
      "行動単位ガバナンス"
    ],
    "purpose": "現在の行動許可が、概念的なガバナンスモデルのどこに位置するかを確認します。",
    "sections": [
      {
        "title": "AIBLとは？",
        "text": "AIBLは、現在の行動許可を、技術的能力やシステム全体に対する承認とは区別して扱います。"
      },
      {
        "title": "中心となる区別",
        "type": "distinction",
        "text": "能力 ≠ 許可\n(Capability ≠ Permission)"
      },
      {
        "title": "概念の流れ",
        "type": "flow",
        "items": [
          "アシュアランス（Assurance）",
          "ガバナンス上の許可",
          "実行時制御（Runtime Enforcement）",
          "観測された結果",
          "見直し / 再検証"
        ]
      },
      {
        "title": "主要概念",
        "type": "labels",
        "items": [
          "行動許可クラス",
          "許可状態",
          "物理運用条件範囲（Physical Operational Envelope）",
          "停止",
          "再検証",
          "再進入（Re-entry）"
        ]
      },
      {
        "title": "まだ抽象的なまま残る問い",
        "type": "list",
        "items": [
          "「現在有効」とは、具体的に何を意味するのか？",
          "入力が競合した場合、何が起きるのか？",
          "どの証拠があれば十分なのか？",
          "再進入が成功したとは、具体的に何を意味するのか？"
        ]
      },
      {
        "type": "related",
        "label": "運用的翻訳へ進む →",
        "view": "translation"
      }
    ]
  },
  "translation": {
    "title": "運用的翻訳",
    "chips": [
      "v5.0 中核",
      "運用的翻訳",
      "意味論"
    ],
    "purpose": "運用的翻訳（Operational Translation）によって、ガバナンス判断の背後にある前提を、実行できるほど明示的にします。",
    "sections": [
      {
        "type": "lead",
        "text": "ガバナンスを実行可能にする前に、何を明示しなければならないのか？"
      },
      {
        "title": "7つの意味論的次元",
        "type": "selector",
        "id": "semantics",
        "options": [
          {
            "code": "01",
            "title": "判断状態",
            "items": [
              "ALLOWは、モデル化された動作を許可します。",
              "HOLDは、必要な根拠が未確定な間、実行を保留します。",
              "DENYは、たとえば明示的な禁止条件のもとで実行を拒否します。",
              "HOLDとDENYは、どちらも非実行につながり得ますが、その理由は異なり、相互に置き換えられるものではありません。",
              "判断結果（verdict）と実行時の状態（runtime state）は別の概念です。"
            ]
          },
          {
            "code": "02",
            "title": "同一性・結び付け・由来情報（Provenance）",
            "items": [
              "入力が、どの主体、対象、情報源、イベント、ポリシー、アーティファクトを指しているのかを確立します。",
              "時間的に新しい入力でも、別の対象を指していれば利用できない場合があります。",
              "結び付け（Binding）は、指定された対応関係を確立するものであり、現実世界の真実そのものを証明するものではありません。"
            ],
            "note": "ハッシュ一致は真実を意味せず、マニフェスト一致は正当な承認を意味しません。"
          },
          {
            "code": "03",
            "title": "時間的有効性",
            "text": "入力ファミリーごとに、異なる時間的契約を用いる場合があります。",
            "example": "Authority:\nvalid_from <= now < valid_until\n\nObservation-like input:\n0 <= age <= max_age",
            "note": "新しいタイムスタンプだけでは、その観測が正しいことは確立されません。"
          },
          {
            "code": "04",
            "title": "競合・優先順位",
            "items": [
              "確立済みの入力同士が一致しない場合があります。",
              "未解決の競合はHOLDにつながり得ます。",
              "明示的な禁止はDENYにつながり得ます。",
              "ローカルな分岐順序は、普遍的な競合解決体系ではありません。"
            ]
          },
          {
            "code": "05",
            "title": "失敗・状態遷移",
            "flow": [
              "ALLOW",
              "観測された結果",
              "EFFECT_MISMATCH",
              "SUSPENDED"
            ],
            "note": "元の判断を後からDENYへ書き換えるのではなく、観測結果の不一致によって、その後の状態を変更します。"
          },
          {
            "code": "06",
            "title": "再進入",
            "flow": [
              "SUSPENDED",
              "現在の前提条件",
              "AND条件による確認",
              "RUNNING"
            ],
            "items": [
              "技術的に復旧しただけでは、許可は自動的に回復しません。",
              "状態の復元に成功しても、次の通常動作が自動実行されるわけではありません。"
            ],
            "note": "アーティファクトで用いる10要素の前提条件セットは、対象ケースに限定されたものです。すべての実システムに対して十分であるとは主張しません。"
          },
          {
            "code": "07",
            "title": "証拠・リプレイ（記録再照合）",
            "items": [
              "Completenessは、必要な証拠が揃っているかを確認します。",
              "Integrityは、保持された証拠が指定された完全性条件を満たすかを確認します。",
              "raw identityとcanonical identityを区別し、何を基準に比較するかを明示します。",
              "保持された記録同士の比較は、限定的な再構成を支援します。"
            ],
            "note": "証拠の再構成は、独立した認証や物理世界の真実を意味しません。"
          }
        ]
      },
      {
        "title": "なぜ重要なのか",
        "type": "quote",
        "text": "ガバナンス概念は文章として意味を持っていても、そのままでは実行するには曖昧すぎる場合があります。"
      },
      {
        "type": "related",
        "label": "SimBenchへ進む →",
        "view": "simbench"
      }
    ]
  },
  "simbench": {
    "title": "SimBench 実行アーティファクト",
    "chips": [
      "SIMBENCH v1.0.0",
      "PHASE 0–4",
      "SIMULATION_LIMITED"
    ],
    "purpose": "範囲を限定した実行可能アーティファクトと、その実行時構造を確認します。",
    "sections": [
      {
        "title": "アーティファクトの状態",
        "type": "status",
        "rows": [
          [
            "アーティファクト",
            "v1.0.0"
          ],
          [
            "範囲",
            "Phase 0–4"
          ],
          [
            "モード",
            "決定論的シミュレーション"
          ],
          [
            "主張範囲",
            "SIMULATION_LIMITED"
          ]
        ]
      },
      {
        "title": "Phase構造",
        "type": "selector",
        "id": "phases",
        "options": [
          {
            "code": "P0–2",
            "title": "ガバナンス構造の基礎",
            "items": [
              "判断の意味",
              "構造化された入力",
              "行動スコープ",
              "証拠 / 証跡の基礎",
              "判断と実行時制御の分離",
              "状態遷移の前提",
              "決定論的フィクスチャ"
            ]
          },
          {
            "code": "P3",
            "title": "敵対的ガバナンス境界",
            "items": [
              "HOLD / DENYの分離",
              "競合処理",
              "同一性 / Manifestの結び付け",
              "証拠の完全性",
              "AND条件による再進入",
              "物理観測",
              "Effect mismatch → SUSPENDED",
              "No silent retry",
              "Human Gate / controlled closure"
            ]
          },
          {
            "code": "P4",
            "title": "最新性境界",
            "labels": [
              "Authority",
              "Remediation Evidence",
              "Physical Observation",
              "Risk Context"
            ],
            "note": "入力ファミリーごとに、異なる時間的意味論と失敗時の意味を持ちます。"
          }
        ]
      },
      {
        "title": "実行時フロー",
        "type": "selector",
        "id": "runtime",
        "options": [
          {
            "title": "通常動作",
            "flow": [
              "構造化されたContext",
              "ガバナンス判断",
              "ALLOW / HOLD / DENY",
              "実行 / 非実行",
              "観測された結果",
              "状態遷移",
              "証拠 / 証跡"
            ],
            "note": "これは模式的な流れです。ALLOWはモデル化された動作を許可し、HOLD / DENYではその動作を実行しません。観測結果の処理は、実際に実行された動作に対して適用されます。"
          },
          {
            "title": "再進入",
            "flow": [
              "SUSPENDED",
              "現在の前提条件",
              "AND条件による確認",
              "RUNNING"
            ],
            "items": [
              "状態復元のみ",
              "通常の物理動作を自動実行しない"
            ],
            "note": "復旧しただけでは許可は回復しません。また、モデル化された前提条件セットは普遍的な十分条件ではありません。"
          }
        ]
      },
      {
        "title": "主張範囲",
        "text": "SIMULATION_LIMITED — 決定論的な固定ケースによって、実行可能な意味論を確認できるようにしています。実世界のPhysical AI安全性、production readiness、certificationを確立するものではありません。"
      },
      {
        "type": "related",
        "label": "証拠を見る →",
        "view": "evidence"
      }
    ]
  },
  "evidence": {
    "title": "証拠と理論へのフィードバック",
    "chips": [
      "トレーサビリティ",
      "E1–E4",
      "主張範囲",
      "SIMULATION_LIMITED"
    ],
    "purpose": "直接確認できるもの、過去記録として報告されたもの、研究上の解釈を分けて確認します。",
    "sections": [
      {
        "title": "証拠・解釈の区分",
        "type": "evidence",
        "text": "E1–E4は、証拠や解釈の種類を分ける並列カテゴリです。強さの順位ではありません。",
        "entries": [
          {
            "code": "E1",
            "title": "公開実装として直接確認可能",
            "items": [
              "ソースロジック",
              "状態定義",
              "同一性 / 最新性 / 再進入の意味論",
              "Effect mismatch処理"
            ]
          },
          {
            "code": "E2",
            "title": "公開された検証・リプレイ構造",
            "items": [
              "テスト定義",
              "検証ロジック",
              "ハッシュ / Binding",
              "リプレイ関連構造"
            ]
          },
          {
            "code": "E3",
            "title": "過去記録として報告された結果",
            "items": [
              "Phase 3: 60/60",
              "Phase 4: 42/42",
              "Public suite: 614/614"
            ],
            "note": "過去記録／リリース記録に基づく報告値です。v5.0研究内で独立再現した測定値ではありません。SIMULATION_LIMITEDであり、実世界の安全確率ではありません。"
          },
          {
            "code": "E4",
            "title": "概念的推論",
            "items": [
              "型付けされたcurrentness",
              "再構成レベル",
              "限定的な理論改良",
              "より広い解釈上の提案"
            ]
          }
        ]
      },
      {
        "title": "主張範囲",
        "type": "boundary",
        "id": "claim-boundary",
        "supported": [
          "明示された実行可能な意味論",
          "決定論的な固定ケース",
          "追跡可能な判断構造",
          "限定されたリプレイ / 検証構造",
          "理論へのフィードバック"
        ],
        "notEstablished": [
          "実世界のPhysical AI安全性",
          "本番運用への準備完了",
          "認証",
          "オープンワールドへの一般化",
          "物理世界の事実が真であること",
          "外部権限の法的正当性",
          "普遍的な競合解決",
          "マルチエージェント・ガバナンスの有効性"
        ]
      },
      {
        "title": "Bindingは真実ではない",
        "type": "list",
        "items": [
          "ハッシュ一致 ≠ 真実",
          "新しいタイムスタンプ ≠ 正しい観測",
          "マニフェスト一致 ≠ 正当な承認"
        ]
      },
      {
        "title": "理論へのフィードバック",
        "id": "theory-feedback",
        "type": "flow",
        "items": [
          "実装",
          "暗黙の前提が明示される",
          "理論と比較する",
          "改良 / 限定 / 実装上の限界として保持",
          "↺ AIBLの改良へ戻る"
        ],
        "returnPath": true
      },
      {
        "type": "related",
        "label": "AIBL概念モデルへ戻る →",
        "view": "aibl"
      }
    ]
  },
  "questions": {
    "title": "問いの整理マップ",
    "chips": [
      "方向づけ",
      "隣接する問い"
    ],
    "purpose": "用語が似ている研究を、主にどの問いを扱っているかで整理します。",
    "sections": [
      {
        "title": "どの問いを扱っているのか？",
        "type": "questions",
        "entries": [
          [
            "モデル評価（Model Evaluation）",
            "モデルは何ができるのか？"
          ],
          [
            "実行可否の選別（Execution Selectivity）",
            "この操作を通すべきか？"
          ],
          [
            "実行時ガバナンス（Runtime Governance）",
            "実行の根拠は現在も成立しているか？"
          ],
          [
            "運用的翻訳（Operational Translation）",
            "その判断を実行可能にするため、何を明示する必要があるか？"
          ],
          [
            "ガバナンス・アシュアランス（Governance Assurance）",
            "後から何を確認・再構成できるか？"
          ]
        ]
      },
      {
        "title": "方向づけのための補助",
        "text": "異なる研究が同じような機構を扱っていても、中心となる問いが異なる場合があります。このマップは位置づけを助けるためのものであり、普遍的な分類体系でも、システムの順位付けでもありません。"
      },
      {
        "type": "related",
        "label": "運用的翻訳を見る →",
        "view": "translation"
      }
    ]
  },
  "automation": {
    "title": "自動化・支援ツール",
    "chips": [
      "PHASE 4後",
      "支援ツール",
      "別レイヤー"
    ],
    "purpose": "人間の判断権限を明示的に残したまま、制御された作業の前後を支援する仕組みです。",
    "sections": [
      {
        "title": "分離された運用支援レイヤー",
        "text": "Phase 4後の支援ツールは、SimBench v1.0.0のPhase 0–4研究アーティファクト本体とは別物です。Tier 1 / Tier 2はPhase 4の実行時意味論ではなく、この支援ツール群はPhase 5でもありません。"
      },
      {
        "type": "flow",
        "items": [
          "Tier 1 / 実行前",
          "Tier 2 / 実行後",
          "Human Gate / 人間が判断"
        ]
      },
      {
        "title": "Tier 1 — 実行前",
        "text": "制御された作業を始める前に、環境が受け入れ可能な状態かを確認します。",
        "type": "list",
        "items": [
          "Git状態",
          "同一性 / ハッシュ検証",
          "Preflight checks",
          "Read-only boundary checks"
        ]
      },
      {
        "title": "Tier 2 — 実行後",
        "text": "制御された実行の後に、生成された証拠を検証・集約します。",
        "type": "list",
        "items": [
          "Postflight checks",
          "Formal run aggregation",
          "証拠の意味的検証",
          "Closure draft generation"
        ],
        "note": "hardening後のTier 2は、ハッシュや件数だけを信頼せず、指定された不正形式や矛盾した証拠を拒否します。"
      },
      {
        "title": "人間による承認ゲート（Human Gate）— 人間が判断",
        "type": "list",
        "items": [
          "Formal GO",
          "逸脱受理",
          "Closure受理",
          "公開 / リリース判断"
        ],
        "note": "自動化はFormal実行やClosureを自律的に承認しません。"
      },
      {
        "title": "境界",
        "type": "quote",
        "text": "自動化は検証を支援する。判断権限は人間に明示的に残す。"
      }
    ]
  }
};
