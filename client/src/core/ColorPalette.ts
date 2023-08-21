interface ColorsMap {
  [name: string]: string;
}

class Colors implements ColorsMap {
  static readonly AVERTRO_BACKGROUND = '#F8F8F8';
  static readonly AVERTRO_WHITE = '#FFFFFF';
  static readonly AVERTRO_BLUE = '#25397D';
  static readonly AVERTRO_RED = '#E03345';
  static readonly PAGE_BORDER = '#D7D7D7';
  static readonly TEXT_BORDER = '#BDBDBD';
  static readonly BODY_TEXT = '#000000';

  [colorName: string]: string;
}

export default Colors