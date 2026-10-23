// Payload shapes captured from the API (api/app/services/fit_gap/engine.rb).
// Keep these in sync with the Rails serializer: they are the contract the UI renders.

export const apiSkillComparisons = [
  {
    skill_label: "React / Frontend Development",
    skill_id: "sk-eng-001",
    candidate_level: 3,
    expected_level: 3,
    result: "match",
    delta: 0,
    confidence: "high",
  },
  {
    skill_label: "Communication",
    skill_id: "communication",
    candidate_level: 2,
    expected_level: 3,
    result: "gap",
    delta: -1,
    confidence: "medium",
  },
  {
    skill_label: "Kubernetes",
    skill_id: null,
    candidate_level: null,
    expected_level: 2,
    result: "not_assessed",
    delta: null,
    confidence: null,
  },
];
