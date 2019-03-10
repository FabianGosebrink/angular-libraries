/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { AngularConsoleLoggerComponent } from './angular-console-logger.component';
import { LoggerConfig } from './logger.config';
var AngularConsoleLoggerModule = /** @class */ (function () {
    function AngularConsoleLoggerModule() {
    }
    /**
     * @param {?} configuration
     * @return {?}
     */
    AngularConsoleLoggerModule.forRoot = /**
     * @param {?} configuration
     * @return {?}
     */
    function (configuration) {
        return {
            ngModule: AngularConsoleLoggerModule,
            providers: [
                {
                    provide: LoggerConfig,
                    useValue: configuration,
                },
            ],
        };
    };
    AngularConsoleLoggerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [AngularConsoleLoggerComponent],
                    exports: [AngularConsoleLoggerComponent],
                },] }
    ];
    return AngularConsoleLoggerModule;
}());
export { AngularConsoleLoggerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1jb25zb2xlLWxvZ2dlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbnNvbGUtbG9nZ2VyLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItY29uc29sZS1sb2dnZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0M7SUFBQTtJQWlCQSxDQUFDOzs7OztJQVhlLGtDQUFPOzs7O0lBQXJCLFVBQXNCLGFBQTJCO1FBQy9DLE9BQU87WUFDTCxRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsWUFBWTtvQkFDckIsUUFBUSxFQUFFLGFBQWE7aUJBQ3hCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBaEJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsRUFBRTtvQkFDWCxZQUFZLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztvQkFDN0MsT0FBTyxFQUFFLENBQUMsNkJBQTZCLENBQUM7aUJBQ3pDOztJQWFELGlDQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FaWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5ndWxhckNvbnNvbGVMb2dnZXJDb21wb25lbnQgfSBmcm9tICcuL2FuZ3VsYXItY29uc29sZS1sb2dnZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2dlckNvbmZpZyB9IGZyb20gJy4vbG9nZ2VyLmNvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFtBbmd1bGFyQ29uc29sZUxvZ2dlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBbmd1bGFyQ29uc29sZUxvZ2dlckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJDb25zb2xlTG9nZ2VyTW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZ3VyYXRpb246IExvZ2dlckNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQW5ndWxhckNvbnNvbGVMb2dnZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IExvZ2dlckNvbmZpZyxcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlndXJhdGlvbixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19