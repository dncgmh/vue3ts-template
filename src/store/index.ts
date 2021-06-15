import { InjectionKey } from 'vue';
import { loadModules, context, modules } from './modules';
import { createStore, useStore as baseUseStore, Store, createLogger } from 'vuex';

export interface State {
  [key: string]: any;
}

export const key: InjectionKey<Store<State>> = Symbol();

const store = createStore({
  modules,
  // strict: false,
  plugins: [createLogger()]
});

export function useStore() {
  return baseUseStore();
}

if (import.meta.hot) {
  import.meta.hot?.accept(context.id, () => {
    const { modules } = loadModules();
    store.hotUpdate({
      modules
    });
  });
}

export default store;
