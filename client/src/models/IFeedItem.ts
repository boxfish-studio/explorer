import { IFeedItemMetadata } from "./api/IFeedItemMetadata";

export interface IFeedItem {
    /**
     * The hash.
     */
    id: string;

    /**
     * The transaction value.
     */
    value?: number;

    /**
     * The parent 1.
     */
    parent1?: string;

    /**
     * The parent 2.
     */
    parent2?: string;

    /**
     * Metadata for the item.
     */
    properties?: { [key: string]: unknown };

    /**
     * The payload type if this is Chrysalis.
     */
    payloadType?: "Transaction" | "Index" | "MS" | "None";

    /**
     * Metadata for the item.
     */
    metaData?: IFeedItemMetadata;
}
