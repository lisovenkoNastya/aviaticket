const vFormatNumber = {
  /* eslint-disable no-param-reassign */
  mounted(el: HTMLElement): void {
    const content = el.innerHTML;
    el.innerHTML = content.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  },
  /* eslint-enable no-param-reassign */
};

export default vFormatNumber;
