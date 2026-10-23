import { render, screen, within } from "@testing-library/react";
import ComparisonTable from "@/components/fitgap/ComparisonTable";
import { apiSkillComparisons } from "@/test/fixtures/fitgap";
import type { SkillComparison } from "@/types";

describe("ComparisonTable (API contract)", () => {
  it("shows the required level the API sends for every skill", () => {
    render(<ComparisonTable comparisons={apiSkillComparisons as unknown as SkillComparison[]} />);

    const row = screen.getByText("Communication").closest("tr")!;
    expect(within(row).getByText("L3")).toBeInTheDocument(); // required
    expect(within(row).getByText("L2")).toBeInTheDocument(); // candidate
  });
});
