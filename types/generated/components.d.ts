import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductTransportation extends Schema.Component {
  collectionName: 'components_product_transportation';
  info: {
    displayName: 'Transportation';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
  };
}

export interface ProductSpec extends Schema.Component {
  collectionName: 'components_product_specs';
  info: {
    displayName: 'Spec';
  };
  attributes: {
    spec: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
    measurementUnit: Attribute.String;
  };
}

export interface ProductAdvantage extends Schema.Component {
  collectionName: 'components_product_advantages';
  info: {
    displayName: 'Advantage';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface ProductAccessory extends Schema.Component {
  collectionName: 'components_product_accessories';
  info: {
    displayName: 'Accessory';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    quantity: Attribute.Integer;
  };
}

export interface DeliveryDeliveryOption extends Schema.Component {
  collectionName: 'components_delivery_delivery_options';
  info: {
    displayName: 'Delivery Option';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    price: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    type: Attribute.String & Attribute.Required;
  };
}

export interface CommonList extends Schema.Component {
  collectionName: 'components_common_lists';
  info: {
    displayName: 'List';
  };
  attributes: {
    value: Attribute.String & Attribute.Required;
  };
}

export interface CommonLink extends Schema.Component {
  collectionName: 'components_common_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String & Attribute.Required;
  };
}

export interface CommonItem extends Schema.Component {
  collectionName: 'components_common_items';
  info: {
    displayName: 'TextBlock';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface CommonImage extends Schema.Component {
  collectionName: 'components_common_images';
  info: {
    displayName: 'Image';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String;
    priority: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface CommonFile extends Schema.Component {
  collectionName: 'components_common_files';
  info: {
    displayName: 'File';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String & Attribute.Required;
    preview: Attribute.Media<'images'> & Attribute.Required;
    linkLabel: Attribute.String;
  };
}

export interface CommonContact extends Schema.Component {
  collectionName: 'components_common_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    phoneNumber: Attribute.String & Attribute.Required;
    details: Attribute.String;
  };
}

export interface CommonButton extends Schema.Component {
  collectionName: 'components_buttons_buttons';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    label: Attribute.String;
  };
}

export interface CommonAddress extends Schema.Component {
  collectionName: 'components_common_addresses';
  info: {
    displayName: 'Address';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    address: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'product.transportation': ProductTransportation;
      'product.spec': ProductSpec;
      'product.advantage': ProductAdvantage;
      'product.accessory': ProductAccessory;
      'delivery.delivery-option': DeliveryDeliveryOption;
      'common.list': CommonList;
      'common.link': CommonLink;
      'common.item': CommonItem;
      'common.image': CommonImage;
      'common.file': CommonFile;
      'common.contact': CommonContact;
      'common.button': CommonButton;
      'common.address': CommonAddress;
    }
  }
}
