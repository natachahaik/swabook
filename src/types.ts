export class GoogleResponseProxy {
  public readonly kind: string;
  public readonly totalItems: number;
  public readonly items: ItemsEntityProxy[] | null;
  public static Parse(d: string): GoogleResponseProxy {
    return GoogleResponseProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = "root"): GoogleResponseProxy {
    if (!field) {
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof d !== "object") {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.kind, false, field + ".kind");
    checkNumber(d.totalItems, false, field + ".totalItems");
    checkArray(d.items, field + ".items");
    if (d.items) {
      for (let i = 0; i < d.items.length; i++) {
        d.items[i] = ItemsEntityProxy.Create(
          d.items[i],
          field + ".items" + "[" + i + "]"
        );
      }
    }
    if (d.items === undefined) {
      d.items = null;
    }
    return new GoogleResponseProxy(d);
  }
  private constructor(d: any) {
    this.kind = d.kind;
    this.totalItems = d.totalItems;
    this.items = d.items;
  }
}

export class ItemsEntityProxy {
  public readonly kind: string;
  public readonly id: string;
  public readonly etag: string;
  public readonly selfLink: string;
  public readonly volumeInfo: VolumeInfoProxy;
  public readonly saleInfo: SaleInfoProxy;
  public readonly accessInfo: AccessInfoProxy;
  public readonly searchInfo: SearchInfoProxy | null;
  public static Parse(d: string): ItemsEntityProxy {
    return ItemsEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = "root"): ItemsEntityProxy {
    if (!field) {
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof d !== "object") {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.kind, false, field + ".kind");
    checkString(d.id, false, field + ".id");
    checkString(d.etag, false, field + ".etag");
    checkString(d.selfLink, false, field + ".selfLink");
    d.volumeInfo = VolumeInfoProxy.Create(d.volumeInfo, field + ".volumeInfo");
    d.saleInfo = SaleInfoProxy.Create(d.saleInfo, field + ".saleInfo");
    d.accessInfo = AccessInfoProxy.Create(d.accessInfo, field + ".accessInfo");
    d.searchInfo = SearchInfoProxy.Create(d.searchInfo, field + ".searchInfo");
    if (d.searchInfo === undefined) {
      d.searchInfo = null;
    }
    return new ItemsEntityProxy(d);
  }
  private constructor(d: any) {
    this.kind = d.kind;
    this.id = d.id;
    this.etag = d.etag;
    this.selfLink = d.selfLink;
    this.volumeInfo = d.volumeInfo;
    this.saleInfo = d.saleInfo;
    this.accessInfo = d.accessInfo;
    this.searchInfo = d.searchInfo;
  }
}

export class VolumeInfoProxy {
  public readonly title: string;
  public readonly authors: string[] | null;
  public readonly publisher: string;
  public readonly publishedDate: string;
  public readonly description: string | null;
  public readonly industryIdentifiers: IndustryIdentifiersEntityProxy[] | null;
  public readonly readingModes: ReadingModesProxy;
  public readonly pageCount: number;
  public readonly printType: string;
  public readonly categories: string[] | null;
  public readonly averageRating: number | null;
  public readonly ratingsCount: number | null;
  public readonly maturityRating: string;
  public readonly allowAnonLogging: boolean;
  public readonly contentVersion: string;
  public readonly panelizationSummary: PanelizationSummaryProxy | null;
  public readonly imageLinks: ImageLinksProxy | null;
  public readonly language: string;
  public readonly previewLink: string;
  public readonly infoLink: string;
  public readonly canonicalVolumeLink: string;
  public readonly subtitle: string | null;
  public static Parse(d: string): VolumeInfoProxy {
    return VolumeInfoProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = "root"): VolumeInfoProxy {
    if (!field) {
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof d !== "object") {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.title, false, field + ".title");
    checkArray(d.authors, field + ".authors");
    if (d.authors) {
      for (let i = 0; i < d.authors.length; i++) {
        checkString(d.authors[i], false, field + ".authors" + "[" + i + "]");
      }
    }
    if (d.authors === undefined) {
      d.authors = null;
    }
    checkString(d.publisher, false, field + ".publisher");
    checkString(d.publishedDate, false, field + ".publishedDate");
    checkString(d.description, true, field + ".description");
    if (d.description === undefined) {
      d.description = null;
    }
    checkArray(d.industryIdentifiers, field + ".industryIdentifiers");
    if (d.industryIdentifiers) {
      for (let i = 0; i < d.industryIdentifiers.length; i++) {
        d.industryIdentifiers[i] = IndustryIdentifiersEntityProxy.Create(
          d.industryIdentifiers[i],
          field + ".industryIdentifiers" + "[" + i + "]"
        );
      }
    }
    if (d.industryIdentifiers === undefined) {
      d.industryIdentifiers = null;
    }
    d.readingModes = ReadingModesProxy.Create(
      d.readingModes,
      field + ".readingModes"
    );
    checkNumber(d.pageCount, false, field + ".pageCount");
    checkString(d.printType, false, field + ".printType");
    checkArray(d.categories, field + ".categories");
    if (d.categories) {
      for (let i = 0; i < d.categories.length; i++) {
        checkString(
          d.categories[i],
          false,
          field + ".categories" + "[" + i + "]"
        );
      }
    }
    if (d.categories === undefined) {
      d.categories = null;
    }
    checkNumber(d.averageRating, true, field + ".averageRating");
    if (d.averageRating === undefined) {
      d.averageRating = null;
    }
    checkNumber(d.ratingsCount, true, field + ".ratingsCount");
    if (d.ratingsCount === undefined) {
      d.ratingsCount = null;
    }
    checkString(d.maturityRating, false, field + ".maturityRating");
    checkBoolean(d.allowAnonLogging, false, field + ".allowAnonLogging");
    checkString(d.contentVersion, false, field + ".contentVersion");
    d.panelizationSummary = PanelizationSummaryProxy.Create(
      d.panelizationSummary,
      field + ".panelizationSummary"
    );
    if (d.panelizationSummary === undefined) {
      d.panelizationSummary = null;
    }
    d.imageLinks = ImageLinksProxy.Create(d.imageLinks, field + ".imageLinks");
    if (d.imageLinks === undefined) {
      d.imageLinks = null;
    }
    checkString(d.language, false, field + ".language");
    checkString(d.previewLink, false, field + ".previewLink");
    checkString(d.infoLink, false, field + ".infoLink");
    checkString(d.canonicalVolumeLink, false, field + ".canonicalVolumeLink");
    checkString(d.subtitle, true, field + ".subtitle");
    if (d.subtitle === undefined) {
      d.subtitle = null;
    }
    return new VolumeInfoProxy(d);
  }
  private constructor(d: any) {
    this.title = d.title;
    this.authors = d.authors;
    this.publisher = d.publisher;
    this.publishedDate = d.publishedDate;
    this.description = d.description;
    this.industryIdentifiers = d.industryIdentifiers;
    this.readingModes = d.readingModes;
    this.pageCount = d.pageCount;
    this.printType = d.printType;
    this.categories = d.categories;
    this.averageRating = d.averageRating;
    this.ratingsCount = d.ratingsCount;
    this.maturityRating = d.maturityRating;
    this.allowAnonLogging = d.allowAnonLogging;
    this.contentVersion = d.contentVersion;
    this.panelizationSummary = d.panelizationSummary;
    this.imageLinks = d.imageLinks;
    this.language = d.language;
    this.previewLink = d.previewLink;
    this.infoLink = d.infoLink;
    this.canonicalVolumeLink = d.canonicalVolumeLink;
    this.subtitle = d.subtitle;
  }
}

export class IndustryIdentifiersEntityProxy {
  public readonly type: string;
  public readonly identifier: string;
  public static Parse(d: string): IndustryIdentifiersEntityProxy {
    return IndustryIdentifiersEntityProxy.Create(JSON.parse(d));
  }
  public static Create(
    d: any,
    field: string = "root"
  ): IndustryIdentifiersEntityProxy {
    if (!field) {
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof d !== "object") {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.type, false, field + ".type");
    checkString(d.identifier, false, field + ".identifier");
    return new IndustryIdentifiersEntityProxy(d);
  }
  private constructor(d: any) {
    this.type = d.type;
    this.identifier = d.identifier;
  }
}

export class ReadingModesProxy {
  public readonly text: boolean;
  public readonly image: boolean;
  public static Parse(d: string): ReadingModesProxy {
    return ReadingModesProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = "root"): ReadingModesProxy {
    if (!field) {
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof d !== "object") {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkBoolean(d.text, false, field + ".text");
    checkBoolean(d.image, false, field + ".image");
    return new ReadingModesProxy(d);
  }
  private constructor(d: any) {
    this.text = d.text;
    this.image = d.image;
  }
}

export class PanelizationSummaryProxy {
  public readonly containsEpubBubbles: boolean;
  public readonly containsImageBubbles: boolean;
  public static Parse(d: string): PanelizationSummaryProxy | null {
    return PanelizationSummaryProxy.Create(JSON.parse(d));
  }
  public static Create(
    d: any,
    field: string = "root"
  ): PanelizationSummaryProxy | null {
    if (!field) {
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof d !== "object") {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkBoolean(d.containsEpubBubbles, false, field + ".containsEpubBubbles");
    checkBoolean(
      d.containsImageBubbles,
      false,
      field + ".containsImageBubbles"
    );
    return new PanelizationSummaryProxy(d);
  }
  private constructor(d: any) {
    this.containsEpubBubbles = d.containsEpubBubbles;
    this.containsImageBubbles = d.containsImageBubbles;
  }
}

export class ImageLinksProxy {
  public readonly smallThumbnail: string;
  public readonly thumbnail: string;
  public static Parse(d: string): ImageLinksProxy | null {
    return ImageLinksProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = "root"): ImageLinksProxy | null {
    if (!field) {
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof d !== "object") {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkString(d.smallThumbnail, false, field + ".smallThumbnail");
    checkString(d.thumbnail, false, field + ".thumbnail");
    return new ImageLinksProxy(d);
  }
  private constructor(d: any) {
    this.smallThumbnail = d.smallThumbnail;
    this.thumbnail = d.thumbnail;
  }
}

export class SaleInfoProxy {
  public readonly country: string;
  public readonly saleability: string;
  public readonly isEbook: boolean;
  public readonly listPrice: ListPriceOrRetailPriceProxy | null;
  public readonly retailPrice: ListPriceOrRetailPrice1Proxy | null;
  public readonly buyLink: string | null;
  public readonly offers: OffersEntityProxy[] | null;
  public static Parse(d: string): SaleInfoProxy {
    return SaleInfoProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = "root"): SaleInfoProxy {
    if (!field) {
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof d !== "object") {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.country, false, field + ".country");
    checkString(d.saleability, false, field + ".saleability");
    checkBoolean(d.isEbook, false, field + ".isEbook");
    d.listPrice = ListPriceOrRetailPriceProxy.Create(
      d.listPrice,
      field + ".listPrice"
    );
    if (d.listPrice === undefined) {
      d.listPrice = null;
    }
    d.retailPrice = ListPriceOrRetailPrice1Proxy.Create(
      d.retailPrice,
      field + ".retailPrice"
    );
    if (d.retailPrice === undefined) {
      d.retailPrice = null;
    }
    checkString(d.buyLink, true, field + ".buyLink");
    if (d.buyLink === undefined) {
      d.buyLink = null;
    }
    checkArray(d.offers, field + ".offers");
    if (d.offers) {
      for (let i = 0; i < d.offers.length; i++) {
        d.offers[i] = OffersEntityProxy.Create(
          d.offers[i],
          field + ".offers" + "[" + i + "]"
        );
      }
    }
    if (d.offers === undefined) {
      d.offers = null;
    }
    return new SaleInfoProxy(d);
  }
  private constructor(d: any) {
    this.country = d.country;
    this.saleability = d.saleability;
    this.isEbook = d.isEbook;
    this.listPrice = d.listPrice;
    this.retailPrice = d.retailPrice;
    this.buyLink = d.buyLink;
    this.offers = d.offers;
  }
}

export class ListPriceOrRetailPriceProxy {
  public readonly amount: number;
  public readonly currencyCode: string;
  public static Parse(d: string): ListPriceOrRetailPriceProxy | null {
    return ListPriceOrRetailPriceProxy.Create(JSON.parse(d));
  }
  public static Create(
    d: any,
    field: string = "root"
  ): ListPriceOrRetailPriceProxy | null {
    if (!field) {
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof d !== "object") {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkNumber(d.amount, false, field + ".amount");
    checkString(d.currencyCode, false, field + ".currencyCode");
    return new ListPriceOrRetailPriceProxy(d);
  }
  private constructor(d: any) {
    this.amount = d.amount;
    this.currencyCode = d.currencyCode;
  }
}

export class ListPriceOrRetailPrice1Proxy {
  public readonly amount: number;
  public readonly currencyCode: string;
  public static Parse(d: string): ListPriceOrRetailPrice1Proxy | null {
    return ListPriceOrRetailPrice1Proxy.Create(JSON.parse(d));
  }
  public static Create(
    d: any,
    field: string = "root"
  ): ListPriceOrRetailPrice1Proxy | null {
    if (!field) {
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof d !== "object") {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkNumber(d.amount, false, field + ".amount");
    checkString(d.currencyCode, false, field + ".currencyCode");
    return new ListPriceOrRetailPrice1Proxy(d);
  }
  private constructor(d: any) {
    this.amount = d.amount;
    this.currencyCode = d.currencyCode;
  }
}

export class OffersEntityProxy {
  public readonly finskyOfferType: number;
  public readonly listPrice: ListPriceOrRetailPrice2Proxy;
  public readonly retailPrice: ListPriceOrRetailPrice2Proxy;
  public readonly giftable: boolean;
  public static Parse(d: string): OffersEntityProxy {
    return OffersEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = "root"): OffersEntityProxy {
    if (!field) {
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof d !== "object") {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.finskyOfferType, false, field + ".finskyOfferType");
    d.listPrice = ListPriceOrRetailPrice2Proxy.Create(
      d.listPrice,
      field + ".listPrice"
    );
    d.retailPrice = ListPriceOrRetailPrice2Proxy.Create(
      d.retailPrice,
      field + ".retailPrice"
    );
    checkBoolean(d.giftable, false, field + ".giftable");
    return new OffersEntityProxy(d);
  }
  private constructor(d: any) {
    this.finskyOfferType = d.finskyOfferType;
    this.listPrice = d.listPrice;
    this.retailPrice = d.retailPrice;
    this.giftable = d.giftable;
  }
}

export class ListPriceOrRetailPrice2Proxy {
  public readonly amountInMicros: number;
  public readonly currencyCode: string;
  public static Parse(d: string): ListPriceOrRetailPrice2Proxy {
    return ListPriceOrRetailPrice2Proxy.Create(JSON.parse(d));
  }
  public static Create(
    d: any,
    field: string = "root"
  ): ListPriceOrRetailPrice2Proxy {
    if (!field) {
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof d !== "object") {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.amountInMicros, false, field + ".amountInMicros");
    checkString(d.currencyCode, false, field + ".currencyCode");
    return new ListPriceOrRetailPrice2Proxy(d);
  }
  private constructor(d: any) {
    this.amountInMicros = d.amountInMicros;
    this.currencyCode = d.currencyCode;
  }
}

export class AccessInfoProxy {
  public readonly country: string;
  public readonly viewability: string;
  public readonly embeddable: boolean;
  public readonly publicDomain: boolean;
  public readonly textToSpeechPermission: string;
  public readonly epub: EpubOrPdfProxy;
  public readonly pdf: EpubOrPdfProxy;
  public readonly webReaderLink: string;
  public readonly accessViewStatus: string;
  public readonly quoteSharingAllowed: boolean;
  public static Parse(d: string): AccessInfoProxy {
    return AccessInfoProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = "root"): AccessInfoProxy {
    if (!field) {
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof d !== "object") {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.country, false, field + ".country");
    checkString(d.viewability, false, field + ".viewability");
    checkBoolean(d.embeddable, false, field + ".embeddable");
    checkBoolean(d.publicDomain, false, field + ".publicDomain");
    checkString(
      d.textToSpeechPermission,
      false,
      field + ".textToSpeechPermission"
    );
    d.epub = EpubOrPdfProxy.Create(d.epub, field + ".epub");
    d.pdf = EpubOrPdfProxy.Create(d.pdf, field + ".pdf");
    checkString(d.webReaderLink, false, field + ".webReaderLink");
    checkString(d.accessViewStatus, false, field + ".accessViewStatus");
    checkBoolean(d.quoteSharingAllowed, false, field + ".quoteSharingAllowed");
    return new AccessInfoProxy(d);
  }
  private constructor(d: any) {
    this.country = d.country;
    this.viewability = d.viewability;
    this.embeddable = d.embeddable;
    this.publicDomain = d.publicDomain;
    this.textToSpeechPermission = d.textToSpeechPermission;
    this.epub = d.epub;
    this.pdf = d.pdf;
    this.webReaderLink = d.webReaderLink;
    this.accessViewStatus = d.accessViewStatus;
    this.quoteSharingAllowed = d.quoteSharingAllowed;
  }
}

export class EpubOrPdfProxy {
  public readonly isAvailable: boolean;
  public readonly acsTokenLink: string | null;
  public static Parse(d: string): EpubOrPdfProxy {
    return EpubOrPdfProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = "root"): EpubOrPdfProxy {
    if (!field) {
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof d !== "object") {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkBoolean(d.isAvailable, false, field + ".isAvailable");
    checkString(d.acsTokenLink, true, field + ".acsTokenLink");
    if (d.acsTokenLink === undefined) {
      d.acsTokenLink = null;
    }
    return new EpubOrPdfProxy(d);
  }
  private constructor(d: any) {
    this.isAvailable = d.isAvailable;
    this.acsTokenLink = d.acsTokenLink;
  }
}

export class SearchInfoProxy {
  public readonly textSnippet: string;
  public static Parse(d: string): SearchInfoProxy | null {
    return SearchInfoProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = "root"): SearchInfoProxy | null {
    if (!field) {
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof d !== "object") {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkString(d.textSnippet, false, field + ".textSnippet");
    return new SearchInfoProxy(d);
  }
  private constructor(d: any) {
    this.textSnippet = d.textSnippet;
  }
}

function throwNull2NonNull(field: string, d: any): never {
  return errorHelper(field, d, "non-nullable object", false);
}
function throwNotObject(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function throwIsArray(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function checkArray(d: any, field: string): void {
  if (!Array.isArray(d) && d !== null && d !== undefined) {
    errorHelper(field, d, "array", true);
  }
}
function checkNumber(d: any, nullable: boolean, field: string): void {
  if (
    typeof d !== "number" &&
    (!nullable || (nullable && d !== null && d !== undefined))
  ) {
    errorHelper(field, d, "number", nullable);
  }
}
function checkBoolean(d: any, nullable: boolean, field: string): void {
  if (
    typeof d !== "boolean" &&
    (!nullable || (nullable && d !== null && d !== undefined))
  ) {
    errorHelper(field, d, "boolean", nullable);
  }
}
function checkString(d: any, nullable: boolean, field: string): void {
  if (
    typeof d !== "string" &&
    (!nullable || (nullable && d !== null && d !== undefined))
  ) {
    errorHelper(field, d, "string", nullable);
  }
}
function errorHelper(
  field: string,
  d: any,
  type: string,
  nullable: boolean
): never {
  if (nullable) {
    type += ", null, or undefined";
  }
  throw new TypeError(
    "Expected " +
      type +
      " at " +
      field +
      " but found:\n" +
      JSON.stringify(d) +
      "\n\nFull object:\n"
  );
}
