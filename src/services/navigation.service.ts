import { CommonActions, NavigationContainerRef, StackActions } from '@react-navigation/native';
import { AppStackParams } from '../utils/app-stack-params-list';

interface INavigationManagerService {
    readonly assignNavigator: (ref: NavigationContainerRef<AppStackParams>) => void;
    readonly getCurrentScreenName: () => string;
    readonly goBack: () => void;
    readonly navigate: (name: string, params?: Record<string, unknown>) => void;
    readonly navigateAndClear: (name: string, params?: Record<string, unknown>) => void;
    readonly pushAtIndex: (name: string, index: number, params?: Record<string, unknown>) => void;
    readonly push: (name: string, params?: Record<string, unknown>) => void;
    readonly pop: (count: number) => void;
}

class NavigationManagerService implements INavigationManagerService {

    static navigator?: NavigationContainerRef<AppStackParams>;

    private static instance: NavigationManagerService;

    static getInstance(): NavigationManagerService {
        if (!NavigationManagerService.instance) {
            NavigationManagerService.instance = new NavigationManagerService();
        }
        return NavigationManagerService.instance;
    }

    getCurrentScreenName(): string {
        return NavigationManagerService.navigator?.getCurrentRoute?.()?.name ?? '';
    }

    goBack(): void {
        if (NavigationManagerService.navigator?.canGoBack?.()) {
            NavigationManagerService.navigator?.dispatch?.(CommonActions.goBack());
            return;
        }
    }

    pushAtIndex(name: string, index: number, params?: Record<string, unknown> | undefined): void {
        NavigationManagerService.navigator?.dispatch?.(CommonActions.reset({
            index,
            routes: [{
                name,
                params,
            }],
        }));
    }

    navigate(name: string, params?: Record<string, unknown>): void {
        NavigationManagerService.navigator?.dispatch?.(CommonActions.navigate({
            name, params,
        }));
    }

    navigateAndClear(name: string, params?: Record<string, unknown> | undefined): void {
        NavigationManagerService.navigator?.dispatch?.(CommonActions.reset({
            index: 0,
            routes: [{
                name, params,
            }],
        }));
    }

    assignNavigator(ref: NavigationContainerRef<AppStackParams>): void {
        NavigationManagerService.navigator = ref;
    }

    push(name: string, params?: Record<string, unknown> | undefined): void {
        if (NavigationManagerService.navigator) {
            NavigationManagerService.navigator.dispatch(StackActions.push(name, params));
        }
    }

    pop(count: number): void {
        if (NavigationManagerService.navigator) {
            NavigationManagerService.navigator.dispatch(StackActions.pop(count));
        }
    }

}

export default NavigationManagerService.getInstance();
