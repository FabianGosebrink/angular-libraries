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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1jb25zb2xlLWxvZ2dlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFiaWFuZ29zZWJyaW5rL2FuZ3VsYXItY29uc29sZS1sb2dnZXIvIiwic291cmNlcyI6WyJsaWIvYW5ndWxhci1jb25zb2xlLWxvZ2dlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQztJQUFBO0lBaUJBLENBQUM7Ozs7O0lBWGUsa0NBQU87Ozs7SUFBckIsVUFBc0IsYUFBMkI7UUFDL0MsT0FBTztZQUNMLFFBQVEsRUFBRSwwQkFBMEI7WUFDcEMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixRQUFRLEVBQUUsYUFBYTtpQkFDeEI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFoQkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxFQUFFO29CQUNYLFlBQVksRUFBRSxDQUFDLDZCQUE2QixDQUFDO29CQUM3QyxPQUFPLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztpQkFDekM7O0lBYUQsaUNBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVpZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmd1bGFyQ29uc29sZUxvZ2dlckNvbXBvbmVudCB9IGZyb20gJy4vYW5ndWxhci1jb25zb2xlLWxvZ2dlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9nZ2VyQ29uZmlnIH0gZnJvbSAnLi9sb2dnZXIuY29uZmlnJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW0FuZ3VsYXJDb25zb2xlTG9nZ2VyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0FuZ3VsYXJDb25zb2xlTG9nZ2VyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckNvbnNvbGVMb2dnZXJNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlndXJhdGlvbjogTG9nZ2VyQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBbmd1bGFyQ29uc29sZUxvZ2dlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogTG9nZ2VyQ29uZmlnLFxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWd1cmF0aW9uLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=