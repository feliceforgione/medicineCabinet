import { create } from "zustand";

interface BreadCrumb {
  name: string;
  link: string;
}

type State = {
  homeBreadcrumb: BreadCrumb;
  categoryBreadcrumb: BreadCrumb | null;
  productBreadcrumb: BreadCrumb | null;
};

type Actions = {
  updatecategoryBreadcrumb: (breadcrumb: BreadCrumb | null) => void;
  updateproductBreadcrumb: (breadcrumb: BreadCrumb) => void;
  reset: () => void;
};

// define the initial state
const initialState: State = {
  homeBreadcrumb: { name: "Home", link: "/" },
  categoryBreadcrumb: null,
  productBreadcrumb: null,
};

// create store
const useBreadCrumbStore = create<State & Actions>()((set, get) => ({
  ...initialState,

  updatecategoryBreadcrumb: (categoryBreadcrumb) =>
    set(() => ({ categoryBreadcrumb: categoryBreadcrumb })),
  updateproductBreadcrumb: (productBreadcrumb) =>
    set(() => ({ productBreadcrumb: productBreadcrumb })),
  reset: () => {
    set(initialState);
  },
}));

export default useBreadCrumbStore;
