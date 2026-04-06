export type DisputeType =
  | 'product_not_received'
  | 'fraudulent'
  | 'subscription_canceled'
  | 'duplicate_charge';

export type EvidenceKey =
  | 'orderConfirmation'
  | 'trackingNumber'
  | 'deliveryConfirmation'
  | 'customerCommunication'
  | 'refundPolicy'
  | 'billingDescriptor'
  | 'usageLogs'
  | 'cancellationPolicy'
  | 'cancellationProof'
  | 'duplicateChargeExplanation';

export type IntakeData = {
  merchantName: string;
  storeUrl: string;
  disputeType: DisputeType;
  orderId: string;
  orderDate: string;
  orderAmount: string;
  currency: string;
  customerName: string;
  customerEmail: string;
  fulfillmentDate: string;
  deliveryDate: string;
  disputeDate: string;
  shippingAddress: string;
  productSummary: string;
  descriptor: string;
  notes: string;
  evidence: EvidenceKey[];
};

export type BriefResult = {
  title: string;
  merchantSummary: string[];
  checklist: string[];
  missingItems: string[];
  rebuttalDraft: string;
  timeline: { label: string; date: string; detail: string }[];
  copyBlock: string;
};

type Rule = {
  label: string;
  checklist: string[];
  evidence: EvidenceKey[];
  angle: string;
  missingPrompts: Record<EvidenceKey, string>;
};

export const disputeTypeLabels: Record<DisputeType, string> = {
  product_not_received: 'Product not received',
  fraudulent: 'Fraudulent transaction',
  subscription_canceled: 'Subscription canceled',
  duplicate_charge: 'Duplicate charge'
};

export const evidenceLabels: Record<EvidenceKey, string> = {
  orderConfirmation: 'Order confirmation / invoice',
  trackingNumber: 'Tracking number',
  deliveryConfirmation: 'Carrier delivery confirmation',
  customerCommunication: 'Customer communication or support replies',
  refundPolicy: 'Refund / return policy shown at checkout',
  billingDescriptor: 'Billing descriptor match',
  usageLogs: 'Login, usage, or subscription access logs',
  cancellationPolicy: 'Cancellation terms agreed at signup',
  cancellationProof: 'Cancellation timing / no-cancel request proof',
  duplicateChargeExplanation: 'Explanation of the second charge or separate order'
};

export const demoIntake: IntakeData = {
  merchantName: 'Northline Supplements',
  storeUrl: 'https://northline.example',
  disputeType: 'product_not_received',
  orderId: '#4821',
  orderDate: '2026-03-21',
  orderAmount: '84.00',
  currency: 'USD',
  customerName: 'Maya Reynolds',
  customerEmail: 'maya@example.com',
  fulfillmentDate: '2026-03-22',
  deliveryDate: '2026-03-25',
  disputeDate: '2026-04-01',
  shippingAddress: '742 Evergreen Terrace, Springfield, IL 62704',
  productSummary: '2x monthly wellness supplement bundle',
  descriptor: 'NORTHLINE*WELLNESS',
  notes:
    'Customer emailed on 2026-03-24 asking for ETA. Support replied same day with tracking. Carrier scan shows delivered to front porch on 2026-03-25.',
  evidence: ['orderConfirmation', 'trackingNumber', 'deliveryConfirmation', 'customerCommunication', 'refundPolicy']
};

const rules: Record<DisputeType, Rule> = {
  product_not_received: {
    label: 'Product not received',
    checklist: [
      'Order confirmation with itemized purchase details',
      'Tracking number tied to the customer shipping address',
      'Carrier delivery confirmation or proof of delivery scan',
      'Support thread showing the merchant responded after the delivery question',
      'Checkout refund / shipping policy shown before purchase'
    ],
    evidence: ['orderConfirmation', 'trackingNumber', 'deliveryConfirmation', 'customerCommunication', 'refundPolicy'],
    angle: 'Show that the order was fulfilled on time, shipped to the provided address, and marked delivered by the carrier.',
    missingPrompts: {
      orderConfirmation: 'Add the original order confirmation or invoice.',
      trackingNumber: 'Add the carrier tracking number tied to the order.',
      deliveryConfirmation: 'Add delivery confirmation or proof-of-delivery detail.',
      customerCommunication: 'Add the customer support exchange about shipping or delivery.',
      refundPolicy: 'Add the shipping/refund policy visible at checkout.',
      billingDescriptor: '',
      usageLogs: '',
      cancellationPolicy: '',
      cancellationProof: '',
      duplicateChargeExplanation: ''
    }
  },
  fraudulent: {
    label: 'Fraudulent transaction',
    checklist: [
      'Order confirmation with billing and shipping identity',
      'Shipping proof or delivery confirmation',
      'Billing descriptor match to reduce cardholder confusion',
      'Customer communication or prior purchase history if available',
      'Refund / return policy displayed at checkout'
    ],
    evidence: ['orderConfirmation', 'deliveryConfirmation', 'billingDescriptor', 'customerCommunication', 'refundPolicy'],
    angle: 'Show that the transaction matched normal customer behavior, the descriptor was recognizable, and the goods or service were delivered as promised.',
    missingPrompts: {
      orderConfirmation: 'Add the order record with customer and shipping details.',
      deliveryConfirmation: 'Add proof the order shipped or was delivered.',
      billingDescriptor: 'Add the statement descriptor used on the cardholder statement.',
      customerCommunication: 'Add any customer communication or prior order history.',
      refundPolicy: 'Add the checkout refund / return policy.',
      trackingNumber: '',
      usageLogs: '',
      cancellationPolicy: '',
      cancellationProof: '',
      duplicateChargeExplanation: ''
    }
  },
  subscription_canceled: {
    label: 'Subscription canceled',
    checklist: [
      'Original order confirmation and subscription terms',
      'Cancellation policy accepted by the customer',
      'Usage or account access logs after the alleged cancellation date',
      'Support communication showing no valid cancel request before renewal',
      'Billing descriptor and invoice for the renewed charge'
    ],
    evidence: ['orderConfirmation', 'cancellationPolicy', 'usageLogs', 'customerCommunication', 'billingDescriptor', 'cancellationProof'],
    angle: 'Show that the customer agreed to recurring billing terms and there is no evidence of a valid cancellation before renewal.',
    missingPrompts: {
      orderConfirmation: 'Add the subscription order confirmation.',
      cancellationPolicy: 'Add the recurring billing and cancellation terms.',
      usageLogs: 'Add account access or subscription usage logs.',
      customerCommunication: 'Add support communication about cancellation.',
      billingDescriptor: 'Add the recurring billing descriptor or invoice.',
      cancellationProof: 'Add proof of cancellation timing or the lack of a cancellation request.',
      trackingNumber: '',
      deliveryConfirmation: '',
      refundPolicy: '',
      duplicateChargeExplanation: ''
    }
  },
  duplicate_charge: {
    label: 'Duplicate charge',
    checklist: [
      'Separate order confirmations or invoice records',
      'Explanation of why charges were distinct',
      'Delivery or fulfillment record for each charge',
      'Customer communication clarifying the second purchase',
      'Refund policy and any refund actions already taken'
    ],
    evidence: ['orderConfirmation', 'duplicateChargeExplanation', 'deliveryConfirmation', 'customerCommunication', 'refundPolicy'],
    angle: 'Show that each charge corresponds to a distinct order, shipment, renewal, or customer-authorized transaction.',
    missingPrompts: {
      orderConfirmation: 'Add records for each order or invoice involved.',
      duplicateChargeExplanation: 'Add a clear explanation for why the charges were separate.',
      deliveryConfirmation: 'Add fulfillment or delivery details for each charge.',
      customerCommunication: 'Add support communication that references the order history.',
      refundPolicy: 'Add the refund policy and any refund status.',
      trackingNumber: '',
      billingDescriptor: '',
      usageLogs: '',
      cancellationPolicy: '',
      cancellationProof: ''
    }
  }
};

const safeValue = (value: string, fallback = 'Not provided') => value.trim() || fallback;

export function generateChargebackBrief(input: IntakeData): BriefResult {
  const rule = rules[input.disputeType];
  const providedEvidence = new Set(input.evidence);

  const missingItems = rule.evidence
    .filter((key) => !providedEvidence.has(key))
    .map((key) => rule.missingPrompts[key] || `Add ${evidenceLabels[key]}.`)
    .filter(Boolean);

  const timeline = [
    { label: 'Order placed', date: safeValue(input.orderDate), detail: `${safeValue(input.customerName)} purchased ${safeValue(input.productSummary)}.` },
    { label: 'Fulfillment', date: safeValue(input.fulfillmentDate), detail: 'Merchant fulfilled the order and prepared shipment/service delivery.' },
    { label: 'Delivery / access', date: safeValue(input.deliveryDate), detail: 'Delivery or service access recorded for the customer.' },
    { label: 'Dispute opened', date: safeValue(input.disputeDate), detail: `${rule.label} dispute was filed against the transaction.` }
  ];

  const merchantSummary = [
    `${safeValue(input.merchantName)} is responding to a ${rule.label.toLowerCase()} dispute for order ${safeValue(input.orderId)} totaling ${safeValue(input.currency)} ${safeValue(input.orderAmount)}.`,
    `The transaction relates to ${safeValue(input.productSummary)} and was associated with the descriptor ${safeValue(input.descriptor)}.`,
    `Primary response angle: ${rule.angle}`,
    `Merchant notes: ${safeValue(input.notes)}`
  ];

  const rebuttalDraft = `We respectfully dispute the cardholder claim for order ${safeValue(input.orderId)}. ${safeValue(input.merchantName)} can document that the purchase was legitimate and fulfilled in line with the terms presented at checkout. ${rule.angle} The order was placed on ${safeValue(input.orderDate)} for ${safeValue(input.productSummary)} and the merchant's internal record shows fulfillment on ${safeValue(input.fulfillmentDate)}${input.deliveryDate ? ` with delivery/access recorded on ${input.deliveryDate}` : ''}. The card statement descriptor used for the charge was ${safeValue(input.descriptor)}. Additional supporting context: ${safeValue(input.notes)}. Based on the enclosed documentation, we request reversal of the chargeback in favor of the merchant.`;

  const copyBlock = [
    `Chargeback Brief — ${safeValue(input.orderId)}`,
    `Merchant: ${safeValue(input.merchantName)} (${safeValue(input.storeUrl)})`,
    `Customer: ${safeValue(input.customerName)} — ${safeValue(input.customerEmail)}`,
    `Dispute type: ${rule.label}`,
    `Amount: ${safeValue(input.currency)} ${safeValue(input.orderAmount)}`,
    '',
    'Merchant summary:',
    ...merchantSummary.map((line) => `- ${line}`),
    '',
    'Evidence checklist:',
    ...rule.checklist.map((line) => `- ${line}`),
    '',
    'Missing items:',
    ...(missingItems.length ? missingItems.map((line) => `- ${line}`) : ['- None flagged from the current intake.']),
    '',
    'Rebuttal draft:',
    rebuttalDraft,
    '',
    'Timeline:',
    ...timeline.map((item) => `- ${item.label}: ${item.date} — ${item.detail}`)
  ].join('\n');

  return {
    title: `${rule.label} brief for ${safeValue(input.orderId)}`,
    merchantSummary,
    checklist: rule.checklist,
    missingItems,
    rebuttalDraft,
    timeline,
    copyBlock
  };
}
