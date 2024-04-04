document.addEventListener("DOMContentLoaded", function() {
  const boldButton = document.getElementById("bold");
  const italicButton = document.getElementById("italic");
  const underlineButton = document.getElementById("underline");
  const fontsSelect = document.getElementById("fonts");
  const sizeSelect = document.getElementById("size");
  const colorInput = document.getElementById("color");
  const alignLeftButton = document.getElementById("align-left");
  const alignCenterButton = document.getElementById("align-center");
  const alignRightButton = document.getElementById("align-right");
  const listUlButton = document.getElementById("list-ul");
  const listOlButton = document.getElementById("list-ol");
  
  boldButton.addEventListener("click", function() {
      document.execCommand("bold");
  });

  italicButton.addEventListener("click", function() {
      document.execCommand("italic");
  });

  underlineButton.addEventListener("click", function() {
      document.execCommand("underline");
  });

  fontsSelect.addEventListener("change", function() {
      const font = fontsSelect.value;
      document.execCommand("fontName", false, font);
  });

  sizeSelect.addEventListener("change", function() {
      const size = sizeSelect.value;
      document.execCommand("fontSize", false, size);
  });

  colorInput.addEventListener("change", function() {
    const color = colorInput.value;
    document.execCommand("foreColor", false, color);
});


  alignLeftButton.addEventListener("click", function() {
      document.execCommand("justifyLeft");
  });

  alignCenterButton.addEventListener("click", function() {
      document.execCommand("justifyCenter");
  });

  alignRightButton.addEventListener("click", function() {
      document.execCommand("justifyRight");
  });

  listUlButton.addEventListener("click", function() {
      document.execCommand("insertUnorderedList");
  });

  listOlButton.addEventListener("click", function() {
      document.execCommand("insertOrderedList");
  });
});
