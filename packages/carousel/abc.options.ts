import {InjectionToken} from '@angular/core';

// todo(ccliu): 重复的Token定义怎么办？

export const ALTERNATIVES = new InjectionToken('主页可配置项');

export const PANEL_ID = new InjectionToken('组件定义id');
export const PANEL_ITEM = new InjectionToken('走马灯PanelItem');

export const TURNOVER_POSITIVE = new InjectionToken('TurnOver正面');
export const TURNOVER_NEGATIVE = new InjectionToken('TurnOver反面');
