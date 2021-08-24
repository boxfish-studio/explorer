import { IIdentityDIDHistoryResponse } from "../../../../models/api/IIdentityDIDHistoryResponse";

export interface IdentityTreeProps {
    history?: IIdentityDIDHistoryResponse | undefined;

    onItemClick(messageId: string, content: unknown): void;
}
