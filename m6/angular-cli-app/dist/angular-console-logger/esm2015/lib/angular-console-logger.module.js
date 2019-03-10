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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1jb25zb2xlLWxvZ2dlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbnNvbGUtbG9nZ2VyLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItY29uc29sZS1sb2dnZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFPL0MsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7SUFDOUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUEyQjtRQUMvQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLDBCQUEwQjtZQUNwQyxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLFFBQVEsRUFBRSxhQUFhO2lCQUN4QjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWhCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsWUFBWSxFQUFFLENBQUMsNkJBQTZCLENBQUM7Z0JBQzdDLE9BQU8sRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuZ3VsYXJDb25zb2xlTG9nZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9hbmd1bGFyLWNvbnNvbGUtbG9nZ2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dnZXJDb25maWcgfSBmcm9tICcuL2xvZ2dlci5jb25maWcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbQW5ndWxhckNvbnNvbGVMb2dnZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQW5ndWxhckNvbnNvbGVMb2dnZXJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyQ29uc29sZUxvZ2dlck1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWd1cmF0aW9uOiBMb2dnZXJDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFuZ3VsYXJDb25zb2xlTG9nZ2VyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBMb2dnZXJDb25maWcsXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZ3VyYXRpb24sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==