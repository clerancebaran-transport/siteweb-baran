const translations = {
  en: {
    navbar: {
      links: [
        { label: 'Home', href: '#hero' },
        { label: 'Services', href: '#services' },
        { label: 'Our Approach', href: '#why-us' },
        { label: 'Process', href: '#process' },
        { label: 'About', href: '#founder' },
        { label: 'Contact', href: '#contact' },
      ],
      cta: 'Free Quote',
    },
    hero: {
      badge: 'Licensed Customs Broker — Belgium',
      h1a: 'Your Expert in',
      h1b: 'Customs Clearance',
      subtitle: 'Clearance Baran handles your import/export operations with precision, compliance and speed. E-commerce, China–Belgium trade, sea, air & road — end-to-end customs expertise at your service.',
      cta1: 'Get a Free Quote',
      cta2: 'Our Services',
    },
    services: {
      label: 'Our Expertise',
      title: 'Our Services',
      subtitle: 'A complete range of services to secure and optimise your international customs operations.',
      items: [
        {
          title: 'Customs Clearance',
          desc: 'Full handling of import and export customs declarations for all transport modes — sea, air and road. Compliance with Belgian and EU regulations.',
          items: ['Import & export declarations', 'FCL/LCL container management', 'Cross-border transit'],
        },
        {
          title: 'Freight & Transport',
          desc: 'Organisation of freight and container transport across Belgium and internationally. Groupage of individual shipments and coordinated delivery.',
          items: ['Container transport', 'Groupage & consolidation', 'Last-mile delivery'],
        },
        {
          title: 'Express Delivery',
          desc: 'Collection, routing and distribution of express parcels and letters for businesses and individuals. Fast turnaround with full tracking.',
          items: ['Express freight', 'B2B & B2C parcels', 'Airport shuttle logistics'],
        },
        {
          title: 'E-commerce & China Trade',
          desc: 'Specialised support for e-commerce businesses importing from China to Belgium. Customs clearance, VAT handling and direct delivery to end customers.',
          items: ['China–Belgium imports', 'E-commerce logistics', 'VAT & duty management'],
        },
      ],
    },
    stats: [
      { label: 'Satisfied Clients', sub: 'businesses supported' },
      { label: 'Experience', sub: 'customs expertise' },
      { label: 'Compliance Rate', sub: 'files approved' },
      { label: 'Average Turnaround', sub: 'file processing time' },
    ],
    whyUs: {
      label: 'Why choose us',
      h2a: 'The Reference in',
      h2b: 'Customs Clearance',
      text: 'Clearance Baran is your trusted customs partner in Belgium. We combine certified technical expertise, operational speed and a personal commitment to full compliance on every file.',
      certified: 'Licensed & Certified',
      features: [
        {
          title: 'Certified Expertise',
          desc: 'HEC-certified training in Customs & Excise Legislation. Licensed customs broker with deep knowledge of Belgian and EU trade regulations.',
        },
        {
          title: 'Guaranteed Compliance',
          desc: '98% compliance rate. Every file is handled with rigour to prevent holds, penalties and delays at customs.',
        },
        {
          title: '24/7 Responsiveness',
          desc: 'Real-time tracking of your operations. Available to handle urgent customs matters at any time, including for e-commerce shipments.',
        },
        {
          title: 'China–Belgium Specialist',
          desc: 'Dedicated expertise for businesses importing from China. Direct relationships with carriers and customs authorities on both ends.',
        },
      ],
    },
    process: {
      label: 'Our Method',
      title: 'Clearance Process',
      subtitle: 'A structured 5-step approach to guarantee compliance and speed for all your customs operations.',
      steps: [
        {
          num: '01',
          title: 'Document Collection',
          desc: 'Collection and verification of all commercial documents: invoices, packing lists, bills of lading, certificates of origin.',
        },
        {
          num: '02',
          title: 'Tariff Classification',
          desc: 'Precise determination of customs codes (HS/CN8), calculation of applicable duties and taxes in line with current trade agreements.',
        },
        {
          num: '03',
          title: 'Customs Declaration',
          desc: 'Preparation and submission of the customs declaration to the competent authorities. Real-time tracking at every stage of processing.',
        },
        {
          num: '04',
          title: 'Clearance & Release',
          desc: 'Obtaining release authorisation after customs approval. Management of physical and documentary checks. Payment of duties and taxes.',
        },
        {
          num: '05',
          title: 'Coordinated Delivery',
          desc: 'Coordination with carriers for final delivery. Full file archiving and detailed client reporting upon completion.',
        },
      ],
    },
    founder: {
      label: 'About the Founder',
      title1: 'A Personal,',
      title2: 'Expert Service',
      role: 'Managing Director — Licensed Customs Broker',
      hecLabel: 'HEC Certified',
      hecSub: 'Fundamentals of Customs & Excise Legislation',
      bio1: 'Clearance Baran is a solo operation run personally by Baran Çiçek. When you contact us, you deal directly with a qualified expert — no middlemen, no call centres.',
      bio2: 'With formal training from HEC and hands-on experience in Belgian customs procedures, Baran brings rigour and accountability to every customs file — whether it\'s a single e-commerce parcel or a large container from China.',
      credentials: [
        'HEC — Fundamentals of Customs & Excise Legislation',
        'Licensed Customs Broker, Belgium',
        'Specialist in China–Belgium import operations',
        'Expert in e-commerce cross-border logistics',
      ],
      brokerLabel: 'Licensed Customs Broker',
    },
    contact: {
      label: 'Get In Touch',
      title: "Let's Talk About Your Shipment",
      subtitle: 'Describe your need and our customs expert will get back to you within 24 business hours.',
      info: [
        { label: 'Address', value: 'Rue Delvaux 21, 4340 Awans, Belgium' },
        { label: 'Phone', value: '+32 488 08 01 14' },
        { label: 'Email', value: 'clerancebaran@gmail.com' },
        { label: 'Office Hours', value: 'Mon–Fri: 8:00 – 17:00' },
      ],
      form: {
        name: 'Full Name',
        namePlaceholder: 'John Smith',
        phone: 'Phone',
        email: 'Business Email',
        emailPlaceholder: 'contact@your-company.com',
        message: 'Your Request',
        messagePlaceholder: 'Describe your customs operation, type of goods, volume, origin...',
        submit: 'Send My Request',
        sending: 'Sending...',
        error: 'Something went wrong. Please try again.',
      },
      sentTitle: 'Message Sent',
      sentBody: 'Thank you for your message.\nWe will get back to you within 24 hours.',
      commitmentLabel: 'Our Commitment',
      commitmentQuote: '"We handle every file with the precision of an expert and the responsiveness of a committed partner."',
      brokerLabel: 'Licensed Customs Broker',
    },
    footer: {
      description: 'Licensed customs broker based in Awans, Belgium. Your trusted partner for all customs and freight operations — e-commerce, China trade & beyond.',
      badge: 'Licensed Customs Broker — Belgium',
      categories: {
        Services: ['Customs Clearance', 'Freight & Transport', 'Express Delivery', 'E-commerce Logistics'],
        Information: ['Our Approach', 'Clearance Process', 'Certifications', 'Partners'],
        Legal: [
          { label: 'Legal Notice', href: '#' },
          { label: 'Privacy Policy', href: '/privacy-policy' },
          { label: 'Terms & Conditions', href: '#' },
        ],
      },
      copyright: 'All rights reserved.',
      bottomBadge: 'Licensed Customs Broker — Awans, Belgium',
    },
  },

  fr: {
    navbar: {
      links: [
        { label: 'Accueil', href: '#hero' },
        { label: 'Services', href: '#services' },
        { label: 'Notre Approche', href: '#why-us' },
        { label: 'Processus', href: '#process' },
        { label: 'À Propos', href: '#founder' },
        { label: 'Contact', href: '#contact' },
      ],
      cta: 'Devis Gratuit',
    },
    hero: {
      badge: 'Transitaire Agréé — Belgique',
      h1a: 'Votre Expert en',
      h1b: 'Dédouanement',
      subtitle: 'Clearance Baran gère vos opérations d\'import/export avec précision, conformité et rapidité. E-commerce, commerce Chine–Belgique, maritime, aérien & routier — expertise douanière complète à votre service.',
      cta1: 'Obtenir un Devis Gratuit',
      cta2: 'Nos Services',
    },
    services: {
      label: 'Notre Expertise',
      title: 'Nos Services',
      subtitle: 'Une gamme complète de services pour sécuriser et optimiser vos opérations douanières internationales.',
      items: [
        {
          title: 'Dédouanement',
          desc: 'Prise en charge complète des déclarations douanières import et export pour tous les modes de transport — maritime, aérien et routier. Conformité aux réglementations belges et européennes.',
          items: ['Déclarations import & export', 'Gestion conteneurs FCL/LCL', 'Transit transfrontalier'],
        },
        {
          title: 'Fret & Transport',
          desc: 'Organisation du transport de fret et de conteneurs en Belgique et à l\'international. Groupage d\'envois individuels et livraison coordonnée.',
          items: ['Transport de conteneurs', 'Groupage & consolidation', 'Livraison dernier kilomètre'],
        },
        {
          title: 'Livraison Express',
          desc: 'Collecte, acheminement et distribution de colis et courriers express pour entreprises et particuliers. Rapidité d\'exécution avec suivi complet.',
          items: ['Fret express', 'Colis B2B & B2C', 'Navette aéroport'],
        },
        {
          title: 'E-commerce & Commerce Chine',
          desc: 'Accompagnement spécialisé pour les e-commerçants important de Chine vers la Belgique. Dédouanement, gestion TVA et livraison directe aux clients finaux.',
          items: ['Imports Chine–Belgique', 'Logistique e-commerce', 'Gestion TVA & droits'],
        },
      ],
    },
    stats: [
      { label: 'Clients Satisfaits', sub: 'entreprises accompagnées' },
      { label: 'Expérience', sub: 'expertise douanière' },
      { label: 'Taux de Conformité', sub: 'dossiers approuvés' },
      { label: 'Délai Moyen', sub: 'traitement des dossiers' },
    ],
    whyUs: {
      label: 'Pourquoi nous choisir',
      h2a: 'La Référence en',
      h2b: 'Dédouanement',
      text: 'Clearance Baran est votre partenaire douanier de confiance en Belgique. Nous combinons expertise technique certifiée, rapidité opérationnelle et engagement personnel pour une conformité totale sur chaque dossier.',
      certified: 'Agréé & Certifié',
      features: [
        {
          title: 'Expertise Certifiée',
          desc: 'Formation HEC en Législation Douanière et Accises. Transitaire agréé avec une connaissance approfondie des réglementations commerciales belges et européennes.',
        },
        {
          title: 'Conformité Garantie',
          desc: '98% de taux de conformité. Chaque dossier est traité avec rigueur pour prévenir les blocages, pénalités et retards en douane.',
        },
        {
          title: 'Réactivité 24/7',
          desc: 'Suivi en temps réel de vos opérations. Disponible pour traiter les urgences douanières à tout moment, y compris pour les envois e-commerce.',
        },
        {
          title: 'Spécialiste Chine–Belgique',
          desc: 'Expertise dédiée aux entreprises important de Chine. Relations directes avec les transporteurs et les autorités douanières des deux côtés.',
        },
      ],
    },
    process: {
      label: 'Notre Méthode',
      title: 'Processus de Dédouanement',
      subtitle: 'Une approche structurée en 5 étapes pour garantir la conformité et la rapidité de toutes vos opérations douanières.',
      steps: [
        {
          num: '01',
          title: 'Collecte des Documents',
          desc: 'Collecte et vérification de tous les documents commerciaux : factures, listes de colisage, connaissements, certificats d\'origine.',
        },
        {
          num: '02',
          title: 'Classification Tarifaire',
          desc: 'Détermination précise des codes douaniers (HS/CN8), calcul des droits et taxes applicables selon les accords commerciaux en vigueur.',
        },
        {
          num: '03',
          title: 'Déclaration en Douane',
          desc: 'Préparation et dépôt de la déclaration douanière auprès des autorités compétentes. Suivi en temps réel à chaque étape du traitement.',
        },
        {
          num: '04',
          title: 'Dédouanement & Mainlevée',
          desc: 'Obtention de l\'autorisation de mainlevée après validation douanière. Gestion des contrôles physiques et documentaires. Paiement des droits et taxes.',
        },
        {
          num: '05',
          title: 'Livraison Coordonnée',
          desc: 'Coordination avec les transporteurs pour la livraison finale. Archivage complet du dossier et rapport client détaillé à la clôture.',
        },
      ],
    },
    founder: {
      label: 'À Propos du Fondateur',
      title1: 'Un Service Personnel',
      title2: 'et Expert',
      role: 'Directeur Général — Transitaire Agréé',
      hecLabel: 'Certifié HEC',
      hecSub: 'Fondamentaux de la Législation Douanière et Accises',
      bio1: 'Clearance Baran est une structure individuelle gérée personnellement par Baran Çiçek. Lorsque vous nous contactez, vous traitez directement avec un expert qualifié — sans intermédiaire, sans centre d\'appel.',
      bio2: 'Grâce à une formation formelle à l\'HEC et une expérience pratique des procédures douanières belges, Baran apporte rigueur et responsabilité à chaque dossier — qu\'il s\'agisse d\'un colis e-commerce ou d\'un grand conteneur en provenance de Chine.',
      credentials: [
        'HEC — Fondamentaux de la Législation Douanière et Accises',
        'Transitaire Agréé, Belgique',
        'Spécialiste des opérations import Chine–Belgique',
        'Expert en logistique transfrontalière e-commerce',
      ],
      brokerLabel: 'Transitaire Agréé',
    },
    contact: {
      label: 'Nous Contacter',
      title: 'Parlons de Votre Expédition',
      subtitle: 'Décrivez votre besoin et notre expert douanier vous répondra dans les 24 heures ouvrables.',
      info: [
        { label: 'Adresse', value: 'Rue Delvaux 21, 4340 Awans, Belgique' },
        { label: 'Téléphone', value: '+32 488 08 01 14' },
        { label: 'Email', value: 'clerancebaran@gmail.com' },
        { label: 'Heures de Bureau', value: 'Lun–Ven : 8:00 – 17:00' },
      ],
      form: {
        name: 'Nom Complet',
        namePlaceholder: 'Jean Dupont',
        phone: 'Téléphone',
        email: 'Email Professionnel',
        emailPlaceholder: 'contact@votre-entreprise.com',
        message: 'Votre Demande',
        messagePlaceholder: 'Décrivez votre opération douanière, type de marchandises, volume, origine...',
        submit: 'Envoyer ma Demande',
        sending: 'Envoi en cours...',
        error: 'Une erreur est survenue. Veuillez réessayer.',
      },
      sentTitle: 'Message Envoyé',
      sentBody: 'Merci pour votre message.\nNous vous répondrons dans les 24 heures.',
      commitmentLabel: 'Notre Engagement',
      commitmentQuote: '"Nous traitons chaque dossier avec la précision d\'un expert et la réactivité d\'un partenaire engagé."',
      brokerLabel: 'Transitaire Agréé',
    },
    footer: {
      description: 'Transitaire agréé basé à Awans, Belgique. Votre partenaire de confiance pour toutes vos opérations douanières et logistiques — e-commerce, commerce Chine & au-delà.',
      badge: 'Transitaire Agréé — Belgique',
      categories: {
        Services: ['Dédouanement', 'Fret & Transport', 'Livraison Express', 'Logistique E-commerce'],
        Information: ['Notre Approche', 'Processus de Dédouanement', 'Certifications', 'Partenaires'],
        Légal: [
          { label: 'Mentions Légales', href: '#' },
          { label: 'Politique de Confidentialité', href: '/privacy-policy' },
          { label: 'Conditions Générales', href: '#' },
        ],
      },
      copyright: 'Tous droits réservés.',
      bottomBadge: 'Transitaire Agréé — Awans, Belgique',
    },
  },
}

export default translations
