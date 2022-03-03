import { Module, MutationTree, ActionTree, GetterTree } from 'vuex';
import { StateInterface } from '../index';

const enum MutationTypes {
  toggleCardStatus = 'toggleCardStatus',
  cancelCard = 'cancelCard',
}

const enum ActionTypes {
  toggleCardStatus = 'toggleCardStatus',
  cancelCard = 'cancelCard',
}

export interface CardStateInterface {
  selectedCard: {
    isFreezed: boolean;
    isCanceled: boolean;
  };
}

function state(): CardStateInterface {
  return {
    selectedCard: {
      isFreezed: false,
      isCanceled: false,
    },
  };
}

const mutations: MutationTree<CardStateInterface> = {
  [MutationTypes.toggleCardStatus](state: CardStateInterface) {
    state.selectedCard.isFreezed = !state.selectedCard.isFreezed;
  },
  [MutationTypes.cancelCard](state: CardStateInterface) {
    state.selectedCard.isCanceled = true;
  },
};

const actions: ActionTree<CardStateInterface, StateInterface> = {
  [ActionTypes.toggleCardStatus](context) {
    context.commit('toggleCardStatus');
  },
  [ActionTypes.cancelCard](context) {
    context.commit('toggleCardStatus');
  },
};

const getters: GetterTree<CardStateInterface, StateInterface> = {};

const appModule: Module<CardStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default appModule;
