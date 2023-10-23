// Substitua o conteúdo do seu script.js pelo código abaixo
new Vue({
  el: '#app',
  data: {
    styles: {
      text: "Texto",
      color: "",
      backgroundColor: "",
      height: 21,
      width: 74,
      border: "",
      borderRadius: 0,
      fontFamily: "Arial",
      fontSize: 1
    },
  },
  computed: {
    btnStyle() {
      return {
        backgroundColor: this.styles.backgroundColor,
        height: this.styles.height + 'px',
        width: this.styles.width + 'px',
        color: this.styles.color,
        border: this.styles.border,
        borderRadius: this.styles.borderRadius + 'px',
        fontFamily: this.styles.fontFamily,
        fontSize: this.styles.fontSize + 'rem',
      };
    },
    cssText() {
      return (`
              background-color: ${this.styles.backgroundColor};
              height: ${this.styles.height}px;
              width: ${this.styles.width}px;
              text: ${this.styles.text};
              color: ${this.styles.color};
              border: ${this.styles.border};
              border-radius: ${this.styles.borderRadius}px;
              font-family: ${this.styles.fontFamily};
              font-size: ${this.styles.fontSize}rem;`
      )
    }
  },
  methods: {
    updateStyles() {
      this.cssText = '<span>' + this.cssText.split(';').join(';</span><span>');
    },
    copyCode() {
      const cssCode = document.querySelector('#cssCode');
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(cssCode);
      selection.removeAllRanges();
      selection.addRange(range);

      try {
        document.execCommand('copy');
        alert('Código copiado com sucesso!');
      } catch (err) {
        alert('Erro ao copiar o código.');
      }

      selection.removeAllRanges();
    },
  },
});
