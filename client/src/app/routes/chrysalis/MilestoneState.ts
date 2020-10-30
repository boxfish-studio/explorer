import { IMilestone } from "@iota/iota2.js";

export interface MilestoneState {
    /**
     * Milestone.
     */
    milestone?: IMilestone;

    /**
     * The previous milestone is available.
     */
    previousIndex: number;

    /**
     * The next milestone is available.
     */
    nextIndex: number;

    /**
     * The previous milestone is available.
     */
    hasPrevious: boolean;

    /**
     * The next milestone is available.
     */
    hasNext: boolean;
}
