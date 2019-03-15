/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { AngularConsoleLoggerComponent } from './angular-console-logger.component';
import { LoggerConfig } from './logger.config';
export class AngularConsoleLoggerModule {
    /**
     * @param {?} configuration
     * @return {?}
     */
    static forRoot(configuration) {
        return {
            ngModule: AngularConsoleLoggerModule,
            providers: [
                {
                    provide: LoggerConfig,
                    useValue: configuration,
                },
            ],
        };
    }
}
AngularConsoleLoggerModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [AngularConsoleLoggerComponent],
                exports: [AngularConsoleLoggerComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1jb25zb2xlLWxvZ2dlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFiaWFuZ29zZWJyaW5rL2FuZ3VsYXItY29uc29sZS1sb2dnZXIvIiwic291cmNlcyI6WyJsaWIvYW5ndWxhci1jb25zb2xlLWxvZ2dlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU8vQyxNQUFNLE9BQU8sMEJBQTBCOzs7OztJQUM5QixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQTJCO1FBQy9DLE9BQU87WUFDTCxRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsWUFBWTtvQkFDckIsUUFBUSxFQUFFLGFBQWE7aUJBQ3hCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBaEJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsRUFBRTtnQkFDWCxZQUFZLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztnQkFDN0MsT0FBTyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5ndWxhckNvbnNvbGVMb2dnZXJDb21wb25lbnQgfSBmcm9tICcuL2FuZ3VsYXItY29uc29sZS1sb2dnZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2dlckNvbmZpZyB9IGZyb20gJy4vbG9nZ2VyLmNvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFtBbmd1bGFyQ29uc29sZUxvZ2dlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBbmd1bGFyQ29uc29sZUxvZ2dlckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJDb25zb2xlTG9nZ2VyTW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZ3VyYXRpb246IExvZ2dlckNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQW5ndWxhckNvbnNvbGVMb2dnZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IExvZ2dlckNvbmZpZyxcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlndXJhdGlvbixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19