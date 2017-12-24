import { computed } from "mobx";
import { RootStore } from "./";
import { action } from "mobx/lib/api/action";
import * as api from "../vendor/api";
export class AuthStore {
	protected rootStore: RootStore;

	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
	}

	@computed
	public get isLogged() {
		return false;
	}

	@action
	public loginGoogle(token: string) {
		api.loginGoogle(token).then(result => {
			console.log(result);
		});
	}
}