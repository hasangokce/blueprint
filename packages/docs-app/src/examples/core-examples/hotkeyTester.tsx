/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import * as React from "react";

import { Code, getKeyComboString, KeyCombo } from "@blueprintjs/core";
import { BaseExample } from "@blueprintjs/docs-theme";

export interface IHotkeyTesterState {
    combo: string;
}

export class HotkeyTester extends BaseExample<IHotkeyTesterState> {
    public state: IHotkeyTesterState = {
        combo: null,
    };

    protected renderExample() {
        return (
            <div className="docs-hotkey-tester" onKeyDown={this.handleKeyDown} onBlur={this.handleBlur} tabIndex={0}>
                {this.renderKeyCombo()}
            </div>
        );
    }

    private renderKeyCombo(): React.ReactNode {
        const { combo } = this.state;
        if (combo == null) {
            return "Click here then press a key combo";
        } else {
            return (
                <>
                    <KeyCombo combo={combo} />
                    <Code>{combo}</Code>
                </>
            );
        }
    }

    private handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        const combo = getKeyComboString(e.nativeEvent as KeyboardEvent);
        this.setState({ combo });
    };

    private handleBlur = () => this.setState({ combo: null });
}
