import { ISigLockedDustAllowanceOutput, ISigLockedSingleOutput, IUTXOInput } from "@iota/iota.js";
import { MessageTangleStatus } from "../../messageTangleStatus";
import { IResponse } from "../IResponse";
export interface Output {
    output: {
        address: {
            type: number;
            address: string;
        };
        amount: string;
        type: number;
    };
    spendingMessageId: string;
}

export interface Input {
    transactionId: string;
    transactionOutputIndex: string;
    type: number;
}

export interface ITransaction {
    /**
     * The message id the output was contained in.
     */
    messageId: string;
    /**
     * The milestone index.
     */
    milestoneIndex?: string;
    /**
     * The outputs.
     */
    outputs: Output[];
    /**
     * The inputs.
     */
    inputs: Input[];
    /**
     * Date of Milestone Reference.
     */
    date?: string;
    /**
     * Amount of transaction.
     */
    amount?: number;
    /**
     * Message status
     */
    messageTangleStatus: MessageTangleStatus;
    /**
     * Show if a transation is spent or not.
     */
    isSpent?: boolean;
    /**
     * Transaction which is consumed related to the current transaction.
     */
    relatedSpentTransaction?: {
        /**
         * The message id the output was contained in.
         */
        messageId: string;
        /**
         * Message status
         */
        messageTangleStatus: MessageTangleStatus;
        /**
         * The inputs.
         */
        inputs: IUTXOInput[];
        /**
         * Date of Milestone Reference.
         */
        date?: string;
        /**
         * The outputs.
         */
        outputs: (ISigLockedDustAllowanceOutput | ISigLockedSingleOutput)[];
        /**
         * Show if a transation is spent or not.
         */
        isSpent?: boolean;
        /**
         * Amount of transaction.
         */
        amount?: number;
    };
}

export interface ITransactionsDetailsResponse extends IResponse {
    /**
     * The transaction history data.
     */
    transactionHistory: {
        /**
         * Transactions related to the address.
         */
        transactions?: ITransaction[];
        /**
         * State of Transactions.
         */
        state?: number;
    };
}