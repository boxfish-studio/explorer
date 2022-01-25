import React, { ReactNode } from "react";
import chevronDownGray from "../../assets/chevron-down-gray.svg";
import Currency from "./Currency";
import "./CurrencyButton.scss";
import { CurrencyState } from "./CurrencyState";
/**
 * Component which will display a currency button.
 */
class FiatSelector extends Currency<unknown, CurrencyState> {
    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <div className="select-wrapper">
                <select
                    value={this.state?.currency}
                    onChange={e => {
                        this.setCurrency(e.target.value);
                        this.updateCurrency();
                    }}
                >
                    {this.state?.currencies.map(cur => (
                        <option value={cur} key={cur}>{cur}</option>
                    ))}
                </select>
                <img src={chevronDownGray} alt="expand" />
            </div>
        );
    }

    /**
     * Update formatted currencies.
     */
    protected updateCurrency(): void { }
}

export default FiatSelector;
