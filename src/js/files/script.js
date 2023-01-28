// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

function loadData() {
	return new Promise((resolve, reject) => {
		// setTimeout не является частью решения
		// Код ниже должен быть заменен на логику подходящую для решения вашей задачи
		setTimeout(resolve, 1000);
	})
}

loadData()
	.then(() => {
		let preloaderEl = document.getElementById('preloader');
		preloaderEl.classList.add('hidden');
		preloaderEl.classList.remove('visible');
	});
