(function () {
	'use strict';

	const initAccordion = (accordionWrapper) => {
		accordionWrapper.addEventListener('click', handleAccordionClick);
	};

	function animateOnIntersection(entries, observer) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('animate');
				observer.unobserve(entry.target);
			}
		});
	}

	const animationObserver = new IntersectionObserver(animateOnIntersection, {
		threshold: 0,
	});
	const handleAccordionClick = (e) => {
		const clickedAccordion = e.target.closest('.accordion-heading');
		const content = clickedAccordion.nextElementSibling;
		const isExpanded =
			clickedAccordion.getAttribute('aria-expanded') === 'true';
		const accordionItem = clickedAccordion.closest(
			'.bwdfaq-accordion-item'
		);
		const allAccordions =
			accordionItem.parentNode.querySelectorAll('.accordion-heading');

		const maxHeight = '100vh'; 

		allAccordions.forEach((accordion) => {
			const accordionContent = accordion.nextElementSibling;
			accordion.setAttribute('aria-expanded', 'false');
			accordionContent.style.maxHeight = '0';
		});

		clickedAccordion.setAttribute(
			'aria-expanded',
			isExpanded ? 'false' : 'true'
		);
		content.style.maxHeight = isExpanded ? '0' : maxHeight;
	};




	const expandFirstItem = () => {
		const accordionItems = document.querySelectorAll(
			'.bwdfaq-accordion-item-wrapper'
		);

		accordionItems.forEach((item) => {
			const firstChild = item.firstElementChild.firstElementChild;

			if (firstChild.classList.contains('expand-first-item')) {
				firstChild.setAttribute('aria-expanded', 'true');
				const contentElement = firstChild.nextElementSibling;
				contentElement.style.maxHeight = '100vh';
			}
		});
	};

	const initAllAccordions = () => {
		const accordionWrappers = document.querySelectorAll(
			'.bwdfaq-accordion-item-wrapper'
		);
		accordionWrappers.forEach((animationItem) => {
			animationObserver.observe(animationItem);
		});
		accordionWrappers.forEach(initAccordion);
	};

	const collapsibleObserve = (mutationList) => {
		for (const mutation of mutationList) {
			if (
				mutation.type === 'childList' &&
				mutation.addedNodes.length > 0
			) {
				initAllAccordions();
			}
		}
	};

	const observer = new MutationObserver(collapsibleObserve);
	observer.observe(document.body, {
		childList: true,
		subtree: true,
		attributes: true,
	});

	initAllAccordions();
	expandFirstItem();
})();
