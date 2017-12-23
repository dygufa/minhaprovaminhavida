import { computed } from "mobx";
import { RootStore } from "./";

export class AuthStore {
	private rootStore: RootStore;

	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
	}

	@computed
	public get isLogged() {
		return false;
	}
}