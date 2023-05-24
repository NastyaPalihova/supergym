const tabsParentElement = document.querySelector('[data-tabs="parent"]');

const handleControlClick = (evt, controls, elements, parent) => {
  const target = evt.target;
  const elementContent = target.dataset.content;
  const correspondingTab = parent.querySelector(`[data-element-content="${elementContent}"]`);
  if (!correspondingTab) {
    target.disabled = true;
    return;
  }

  if (target.classList.contains('is-active')) {
    return;
  }

  controls.forEach((button) => {
    button.classList.remove('is-active');
  });
  elements.forEach((element) => {
    element.classList.remove('is-active');
  });

  target.classList.add('is-active');
  correspondingTab.classList.add('is-active');

};

const initTabs = () => {
  if (tabsParentElement) {
    const tabsControls = tabsParentElement.querySelectorAll('[data-tabs="control"]');
    const tabsElementsList = tabsParentElement.querySelectorAll('[data-tabs="element"]');

    if (tabsControls && tabsControls.length && tabsElementsList && tabsElementsList.length) {
      tabsControls.forEach((control) => {
        const elementContent = control.dataset.content;
        const correspondingTab = tabsParentElement.querySelector(`[data-element-content="${elementContent}"]`);
        if (!correspondingTab) {
          control.disabled = true;
        }

        control.addEventListener('click', (evt) => {
          handleControlClick(evt, tabsControls, tabsElementsList, tabsParentElement);
        });
      });
    }
  }
};

export {initTabs};
