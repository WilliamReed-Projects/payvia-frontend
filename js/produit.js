



// ===================
// === CONFIG PRODUITS
// ===================
const produits = {
    "Airbnb": {
      name: "E-carte cadeau Airbnb",
      img: "assets/airbnb.png",
      certif: "payvia.fr est revendeur certifié <b>Airbnb</b>",
      description: [
        "Réservation de logements, expériences, ou escapades partout dans le monde",
        "Idéal pour offrir ou pour voyager soi-même",
        "Utilisable en plusieurs fois, pas de date limite",
        "Achetez en toute discrétion : paiement 100 % crypto",
      ],
  
  
    amountLimits: {
      1000: 3,
      500: 1,
     
    },
    stock: {
      500: 3
      // etc...
    },
  
      faq: [
        {
          q: "Comment utiliser ma carte cadeau Airbnb ?",
          a: "Une fois reçu, connectez-vous à votre compte Airbnb, rendez-vous dans la section « Utiliser un code cadeau » et saisissez le code fourni. Le montant sera crédité sur votre solde Airbnb.",
        },
        {
          q: "Le code est-il envoyé immédiatement ?",
          a: "Oui, dès validation du paiement, votre code est envoyé par e-mail sous 30 secondes, 24h/24.",
        },
        {
          q: "Puis-je payer par carte bancaire ?",
          a: "Non, RechargeCrypto.com est spécialisé dans le paiement par cryptomonnaies pour une discrétion et une sécurité optimale.",
        },
        {
          q: "Le code est-il utilisable dans tous les pays ?",
          a: "La carte cadeau Airbnb achetée ici est valable pour toute réservation sur le site Airbnb.fr ou l'application en France (consultez la FAQ Airbnb pour l'utilisation dans d'autres pays).",
        }
      ],
      amounts: [500, 1000]
    },
    "Amazon": {
      name: "E-carte cadeau Amazon",
      img: "assets/amazon.png",
      certif: "payvia.fr est revendeur certifié <b>Amazon</b>",
      description: [
        "Utilisable sur Amazon.fr pour tous vos achats",
        "Livraison rapide sur des millions de produits",
        "Idéal pour offrir ou s’offrir",
         "Achetez en crypto, recevez votre code en quelques secondes"
    ],
    amountLimits: {
      1000: 5,
      400: 2,
      300: 3,
      250: 3,
     
     
    },
    stock: {
      
       250: 4,
        300: 3,
      400: 4,
    
      // etc...
    },
    faq: [
        {
          q: "Comment utiliser ma carte cadeau Amazon ?",
          a: "Après l’achat, vous recevez un code par e-mail à ajouter sur votre compte Amazon dans l’espace carte cadeau.",
        },
        {
          q: "Code envoyé en combien de temps ?",
          a: "Livraison instantanée, 24h/24, 7j/7.",
        },
        {
          q: "Carte valable dans tous les pays ?",
          a: "Valable sur Amazon.fr uniquement.",
        },
        {
          q: "Paiement accepté ?",
          a: "Paiement 100% crypto.",
        }
      ],
  
      
      amounts: [  300, 400, 1000]
    },
  
  
  "Apple": {
    name: "Carte Apple Store",
    img: "assets/apple.png",
    certif: "payvia.fr est revendeur certifié <b>Apple</b>",
    description: [
      "Offrez-vous ou offrez une carte cadeau Apple, valable sur l’App Store, iTunes, Apple Music et tous les services Apple.",
      "Achetez des applications, jeux, films, séries, musique, iCloud et équipements Apple en toute simplicité.",
      "Utilisable en une ou plusieurs fois, sans date limite d’expiration.",
      "Code reçu instantanément par email après paiement crypto, 100 % sécurisé.",
      "Idéal pour faire plaisir ou se faire plaisir, sans carte bancaire traditionnelle."
    ],
  
  
    amountLimits: {
      1000: 1,
      500: 3
    },
    stock: {
      500: 3
      // etc...
    },
  
      faq: [
    {
      q: "Qu'est-ce qu'une Carte Apple Store ?",
      a: `L'Apple Gift Card est la nouvelle carte cadeau App Store et iTunes. Vous pouvez utiliser la carte cadeau pour recharger le solde de votre compte Apple, ce qui vous permet d'acheter tout ce que vous désirez sur l'App Store, iTunes, apple.com et bien plus.<br><br>
      Encore mieux, vous pouvez utiliser une Apple Gift Card à l'Apple Store le plus proche de chez vous pour acheter le dernier iPhone ou tout autre appareil ou accessoire. Utilisez votre Apple Gift Card pour acheter des produits, des accessoires, des apps, des jeux, de la musique, des films, des séries, etc. Utilisable dans tous les Apple Store, sur l’App Store ou pour des abonnements pour de la musique, iCloud+, et bien plus.<br><br>
      C'est la carte cadeau idéale à offrir, ou pour vous faire plaisir.`
    },
    {
      q: "Pour quoi puis-je utiliser ma carte Apple Gift Card ?",
      a: `Votre Carte App Store est échangeable contre :<br>
      <ul style="margin:0 0 0 20px;">
        <li>Des matériels Apple</li>
        <li>Des accessoires</li>
        <li>Des applications</li>
        <li>Des jeux</li>
        <li>De la musique</li>
        <li>Des films</li>
        <li>Des séries TV</li>
        <li>Des livres</li>
        <li>Un abonnement Apple Music</li>
        <li>iCloud</li>
      </ul>`
    },
    {
      q: "Quelles sont les conditions générales ?",
      a: `<b>Méfiez-vous des arnaques liées aux cartes cadeau. Ne partagez pas votre code.</b><br>
      Valable uniquement pour les transactions effectuées en France dans les points de ventes physiques et numériques Apple. Nécessite l’acceptation préalable des Conditions de licence et d’utilisation. Non monnayable, revente interdite, non utilisable en dehors de la France, non remboursable et non échangeable (sauf si requis par la loi). La collecte et l’utilisation des données sont sujettes à l’Engagement de confidentialité d’Apple ; voir <a href="https://apple.com/fr/privacy" target="_blank" rel="noopener noreferrer">apple.com/fr/privacy</a>.<br>
      Apple n’assume aucune responsabilité en cas de perte ou de dommages causés par le vol ou la perte de cartes ou de toute utilisation sans votre consentement. Vos droits de consommateur ne sont pas affectés. Les cartes Apple sont émises et fournies par Apple Distribution International Ltd.<br>
      En assurant la distribution des cartes, le détaillant agit en tant qu’agent au nom d’Apple Distribution International Ltd. Soumis à conditions ; voir <a href="https://apple.com/fr/go/legal/gc" target="_blank" rel="noopener noreferrer">apple.com/fr/go/legal/gc</a>.<br>
      Le contenu acheté dans l’iTunes Store/l’App Store est strictement réservé à un usage légal et personnel. Pas de date d’expiration.<br>
      © 2025 Apple Distribution International Ltd. Tous droits réservés.`
    },
    {
      q: "Quelle est la durée de validité de ma carte cadeau Apple ?",
      a: "Le crédit sur votre carte cadeau Apple Store a une durée de validité illimitée."
    },
    {
      q: "Comment contacter le service client Apple Gift Card ?",
      a: `Pour tout besoin d’assistance, rendez-vous sur <a href="https://support.apple.com/" target="_blank" rel="noopener noreferrer">Support Apple</a>.`
    },
    {
      q: "De quel type de compte ai-je besoin pour utiliser mon carte cadeau Apple ?",
      a: "Vous aurez besoin d'un compte Apple local correspondant au pays pour lequel vous l'avez acheté."
    },
    {
      q: "Comment-puis je utiliser ma carte cadeau Apple ?",
      a: `L’Apple Gift Card peut être utilisée de deux manières :<br>
      <ul style="margin:0 0 0 20px;">
        <li>Pour réaliser vos achats dans un Apple Store, présentez-leur cet e-mail.</li>
        <li>Pour des achats en ligne, rendez-vous sur <a href="https://apple.com/redeem" target="_blank" rel="noopener noreferrer">apple.com/redeem</a> pour ajouter le montant de la carte au solde de votre compte Apple.</li>
      </ul>`
    }
  ],
      amounts: [500, 1000 ]
    },
  "Transcash": {
    name: "Ticket Transcash",
    img: "assets/transcash.png",
    certif: "payvia.fr est revendeur certifié <b>Transcash</b>",
    description: [
      "Rechargez votre carte Transcash Mastercard rapidement et en toute sécurité",
      "Utilisable en ligne et en magasin partout où Mastercard est acceptée",
      "Idéal pour gérer votre budget ou offrir en toute discrétion",
      "Achetez en crypto, recevez votre code en quelques secondes"
    ],
  
    amountLimits: {
      1000: 3,
      500: 2,
    },
    stock: {
    
      500: 6,
      // etc...
    },
  
    faq: [
      {
        q: "On m'a demandé d'acheter un code Transcash ici. Est-ce normal ?",
        a: `Un livreur vous a appelé ? Vous avez reçu un email de vérification inattendu ? Vous avez vendu ou commandé un item en ligne ?<br><br>
        Si vous êtes ici parce qu'une personne que vous ne connaissez pas vous a demandé d'acheter ce code, nous vous recommandons d'être très vigilants. Les fraudeurs en ligne se font souvent passer pour des personnes ou organisations de confiance. Nous ne pourrons malheureusement pas vous aider s'ils mettent leur main sur votre code.<br><br>
        Pour plus d'informations, lisez notre article sur <a href="https://www.transcash.fr/securite/" target="_blank" rel="noopener noreferrer">comment utiliser votre carte prépayée en toute sécurité</a>.`
      },
      {
        q: "Comment contacter le service client Transcash ?",
        a: `Par e-mail : <a href="mailto:service-client@trans-cash.fr">service-client@trans-cash.fr</a><br><br>
        Par téléphone : 0826 666 555 (0,15€/MIN + prix d'un appel)`
      },
      {
        q: "Où puis-je utiliser ma carte Transcash ?",
        a: `En ligne : Sur tout site internet qui accepte Mastercard comme méthode de paiement.<br><br>
        En magasins :<br>
        Votre carte fonctionne comme une Mastercard normale. Selon votre formule, vous pouvez utiliser votre carte en France et DOM-TOM, ou à l'étranger.`
      },
      {
        q: "Puis-je utiliser mon code Transcash en plusieurs fois ?",
        a: `Votre ticket Transcash vous permet de recharger votre carte Transcash une fois. Le montant est ensuite sur la carte et vous pouvez utiliser celle-ci autant de fois que vous voulez jusqu'à l'expiration de votre crédit Transcash. Rechargez de nouveau votre carte Transcash en achetant un nouveau coupon.`
      },
      {
        q: "Quelle est la durée de validité de mon coupon Transcash ?",
        a: `Si vous avez rechargé votre carte Transcash avec le crédit de votre ticket Transcash, vous pouvez utiliser ce crédit jusqu'à la date d'expiration de votre carte (indiquée sur la carte de paiement prépayée Transcash). Le code est valable 1 an.`
      },
      {
        q: "Comment contrôler le solde de mon ticket Transcash ?",
        a: `Vous pouvez consulter le solde disponible sur votre ticket Transcash 7 jours sur 7 et 24 heures sur 24 en vous connectant à <a href="https://client.transcash.fr/" target="_blank" rel="noopener noreferrer">votre compte Transcash</a> en ligne.<br><br>
        Si vous préférez connaître le montant par téléphone, vous pouvez joindre le service client Transcash au 0 826 666 555 (0,15€/mn).`
      },
      {
        q: "Pourquoi dois-je payer des frais de service supplémentaires pour Transcash ?",
        a: `Pour Transcash, vous devez payer les frais de service Transcash, et les frais de service recharge.fr en plus. Tu payes toujours 21,50 € pour 20 € de crédit.`
      },
      {
        q: "Comment utiliser mon coupon Transcash ?",
        a: `Information importante : Les codes Transcash vendus sur Recharge.fr ne sont pas des cartes prépayées, mais des recharges pour votre carte Transcash. Cela veut dire qu’il faut au préalable déjà avoir une carte Transcash Mastercard.<br><br>
        Si vous vivez en France, vous pouvez commander une carte sur le <a href="https://www.transcash.fr/" target="_blank" rel="noopener noreferrer">site officiel de Transcash</a>.<br><br>
        <b>Vous ne pensiez pas acheter ce code aujourd’hui ?</b> Faites preuve de prudence quant aux arnaques courantes avec ce produit. Ne partagez ce code avec personne d’autre que Transcash, sur leur site officiel <a href="https://www.transcash.fr/" target="_blank" rel="noopener noreferrer">www.transcash.fr</a>.<br><br>
        <b>Comment recharger votre carte :</b><br>
        Le code de Transcash que vous avez reçu recharge votre carte Transcash en suivant les étapes suivantes :<br><br>
        1. Connectez-vous à <a href="https://client.transcash.fr/" target="_blank" rel="noopener noreferrer">votre espace personnel Transcash</a><br>
        2. Allez à la section Rechargement<br>
        3. Entrez votre code de recharge Transcash<br>
        4. Votre carte est alors rechargée et utilisable pour son montant actuel.<br><br>
        <i>Pour pouvoir charger un coupon Transcash vous devez être porteur d'une carte Transcash.</i>`
      },
      {
        q: "Puis-je acheter un ticket Transcash avec PayPal ?",
        a: `Non, l’achat de tickets Transcash avec PayPal n’est pas disponible. Les moyens de paiement acceptés dépendent du site revendeur et des réglementations en vigueur.`
      }
    ],
    amounts: [ 500, 1000 ]
  },
  
  
  "PCS": {
    name: "Carte PCS Mastercard",
    img: "assets/pcs.png",
    certif: "payvia.fr est revendeur certifié <b>PCS</b>",
    description: [
      "Achetez un coupon de recharge PCS et créditez instantanément votre carte PCS Mastercard.",
      "Aucune banque, aucun justificatif d'identité : anonymat garanti.",
      "Utilisable en ligne, en magasin, pour des achats, des retraits d'espèces ou des paiements sans contact.",
      "Fonctionne partout où Mastercard est acceptée, en France et à l’international.",
      "Recharge disponible en plusieurs montants, adaptée à tous les besoins.",
      "Créez votre compte PCS en quelques minutes seulement.",
      "Sécurisé : code envoyé immédiatement par email dès paiement.",
      "Paiement 100 % crypto, simple et discret.",
      "Idéal pour offrir, voyager, gérer un budget ou remplacer une carte bancaire classique.",
      "Aucun engagement, aucune vérification bancaire."
    ],
  
  
    amountLimits: {
     
      1000: 2,
      
    },
    stock: {
      
      // etc...
    },
  
    faq: [
    {
      q: "Comment contacter le service client PCS Mastercard ?",
      a: `Remplissez le formulaire de contact en ligne en suivant <a href="https://www.mypcs.com/contact/" target="_blank" rel="noopener noreferrer">ce lien</a>. <b>Attention :</b> Ne communiquez jamais vos codes à quelqu’un par e-mail, sur les réseaux sociaux, ou via un site de vérification en ligne. Chargez vos codes directement et uniquement sur <a href="https://www.mypcs.com/" target="_blank" rel="noopener noreferrer">https://www.mypcs.com/</a> ou par SMS.`
    },
    {
      q: "Où puis-je utiliser ma carte PCS ?",
      a: `Vous pouvez utiliser votre carte PCS dans l’ensemble des réseaux Mastercard en France ou à l’étranger avec les formules Medium et Premium. La formule Classic est utilisable en France uniquement.`
    },
    {
      q: "Puis-je dépenser le solde de ma carte PCS en plusieurs fois ?",
      a: `Oui, tant qu’il vous reste des fonds, vous pouvez utiliser votre carte PCS autant de fois que vous le souhaitez. S’il vous manque des fonds, vous pouvez recharger la carte et l’utiliser de nouveau. Gardez toutefois à l’esprit que la carte PCS est plafonnée quant au montant que vous pouvez dépenser et recharger. Ce plafond dépend de la carte et de votre formule. Il est possible que votre achat ou votre rechargement ne fonctionne pas pour cette raison donc pensez à bien vous renseigner sur votre carte et formule PCS si vous comptez faire des achats fréquents.`
    },
    {
      q: "Quelle est la durée de validité de mon code PCS ?",
      a: `Un coupon de recharge PCS est valable <b>1 an</b>. La durée de validité de votre carte PCS dépend de la carte que vous possédez :<br>
      <ul style="margin-left:16px;">
        <li>PCS Chrome : Valable 1 an</li>
        <li>PCS Black : Valable 2 ans</li>
        <li>PCS Infinity : Valable 3 ans</li>
        <li>PCS Virtual Card : Valable 2 ans</li>
      </ul>`
    },
    {
      q: "Comment puis-je contrôler le solde de ma carte PCS ?",
      a: `Vous pouvez demander votre solde PCS via l’application, le site web et le service client PCS. Pour demander votre solde par SMS, envoyez un SMS avec <b>SOLDE</b> + les 4 derniers chiffres de votre PCS MasterCard. Selon la carte, vous pouvez aussi envoyer ce SMS aux numéros suivants (0,20€ par SMS) :<br>
      - <b>06.01.78.78.78</b> (BLACK PCS)<br>
      - <b>07.57.57.55.65</b> (PCS CHROME)<br>
      - <b>07.50.09.00.00</b> (PCS INFINITY)<br>
      Vous recevez ensuite un SMS avec le montant de votre solde.`
    },
    {
      q: "Comment utiliser ma PCS Mastercard ?",
      a: `Vous pouvez utiliser votre PCS Mastercard dans toutes les boutiques Internet ou physiques qui acceptent MasterCard. Si vous réglez en ligne, choisissez tout simplement « MasterCard » au moment du règlement de votre commande. Renseignez ensuite le numéro de la carte PCS Mastercard, le code de sécurité et la date d’expiration. Le code de la recharge est valable un an.`
    },
    {
      q: "Comment recharger une carte PCS ?",
      a: `Si vous avez acheté votre coupon PCS sur Recharge.fr, nous vous envoyons votre code de recharge par e-mail. Vous pouvez échanger le code de votre coupon via le service clientèle, le site Internet ou l’application PCS. Vous pouvez également échanger le code PCS directement par SMS. Pour cela, envoyez <b>RECH</b> + un espace et le code de recharge à 10 chiffres + les 4 derniers chiffres de votre PCS MasterCard au numéro suivant :<br>
      - <b>06.01.78.78.78</b> (BLACK PCS)<br>
      - <b>07.57.57.55.65</b> (PCS CHROME)<br>
      - <b>07.50.09.00.00</b> (PCS INFINITY)<br>
      Une fois ces étapes complétées, votre carte PCS est rechargée.`
    },
    {
      q: "Pour quoi puis-je utiliser une carte PCS Mastercard ?",
      a: `Une carte PCS Mastercard est une carte bancaire prépayée. Avec celle-ci, vous pouvez payer en toute sécurité dans tous les commerces membres qui acceptent le paiement avec MasterCard, comme Amazon ou Ebay. Toute personne ayant plus de 18 ans peut utiliser cette carte et vous pouvez la recharger à n’importe quel moment. En utilisant une carte PCS Mastercard, vous gardez le contrôle de vos dépenses, même durant les soldes, les fêtes ou le Black Friday !`
    },
    {
      q: "Comment acheter une carte PCS ?",
      a: `Vous pouvez acheter votre carte PCS en ligne ou chez un buraliste en France (tabac, PMU…). Trouvez votre point de vente PCS le plus proche en cliquant <a href="https://www.mypcs.com/points-de-vente/" target="_blank" rel="noopener noreferrer">ici</a> ou achetez votre carte PCS directement en ligne en cliquant sur <a href="https://www.mypcs.com/acheter/" target="_blank" rel="noopener noreferrer">ce lien</a>.<br>
      Il existe différents types de cartes PCS et abonnements possibles donc renseignez-vous avant pour trouver la carte et formule PCS qui convient à vos besoins.<br>
      <b>Astuce :</b> certaines formules PCS nécessitent une identification avant de pouvoir être achetées. Pour obtenir une carte sans identification, prenez la formule Classic.<br>
      Pour plus d’informations : <a href="https://www.mypcs.com/" target="_blank" rel="noopener noreferrer">www.mypcs.com</a>.`
    }
  
    ],
    amounts: [ 500, 1000 ]
  },
  
  "payvia": {
    name: "Carte bancaire virtuelle payvia",
    img: "assets/payvia.png",
    certif: "payvia.fr est en partenariat avec <b>OneMoneyWay</b> pour la création des cartes bancaires virtuelles.",
    description: [
      "Commandez votre carte bancaire virtuelle et payez facilement sur tous vos sites préférés.",
      "Utilisable immédiatement après réception sur n'importe quel site acceptant les cartes bancaires classiques.",
      "Compatible avec Apple Pay pour payer directement depuis votre smartphone.",
      "Aucun compte bancaire nécessaire, paiement simple et rapide, réception instantanée des informations de la carte.",
      "Gérez facilement votre carte depuis votre dashboard personnel : solde, historique des paiements et possibilité de blocage instantané."
    ],
  
    amountLimits: {
    500:3,
    1000:1,
    1500:1
    },
  
    stock: {
      500: 3,
      // etc...
    },
  
    faq: [
      {
        q: "Où puis-je utiliser ma carte bancaire virtuelle ?",
        a: "Votre carte bancaire virtuelle peut être utilisée sur n'importe quel site acceptant les cartes bancaires classiques ainsi qu'avec Apple Pay sur votre téléphone."
      },
      {
        q: "Quelle est la limite de ma carte virtuelle ?",
        a: "La limite correspond au montant que vous avez commandé. Par exemple, une carte virtuelle de 500€ aura exactement 500€ disponibles."
      },
      {
        q: "Quelle est la durée de validité de ma carte ?",
        a: "Votre carte bancaire virtuelle payvia est valable 1 mois à compter de sa date d'émission."
      },
      {
        q: "Puis-je retirer de l'argent avec ma carte virtuelle ?",
        a: "Non, il s'agit d'une carte virtuelle uniquement destinée aux paiements en ligne ou via Apple Pay."
      },
      {
        q: "Puis-je bloquer ma carte si nécessaire ?",
        a: "Oui, vous pouvez bloquer votre carte instantanément depuis votre dashboard personnel en cas de perte ou de suspicion d'utilisation frauduleuse."
      },
      {
        q: "Comment connaître le solde restant sur ma carte ?",
        a: "Consultez simplement votre dashboard dans l'onglet « Carte » pour voir votre solde et toutes les informations détaillées sur vos transactions."
      }
    ],
  
    amounts: [500, 1000, 1500 ]
  },
  
  "Fnac": {
    name: "Carte Cadeau Fnac",
    img: "assets/fnac.png",
    certif: "payvia.fr est revendeur certifié <b>FNAC</b>",
    description: [
      "Explorez tout ce que la Fnac a à offrir et payez-le avec une carte-cadeau Fnac.",
      "Faites plaisir ou envoyez-la à un proche en toute simplicité.",
      "Profitez de votre shopping avec une carte-cadeau Fnac commandée en quelques secondes.",
      "Sélectionnez le montant de votre choix et recevez votre code Fnac par email après paiement.",
      "Paiement 100% crypto, rapide et discret.",
      "Utilisable en ligne sur Fnac.com et en magasin dans tout le réseau Fnac.",
      "Mode de paiement fiable, aucun compte bancaire requis, idéal pour offrir ou se faire plaisir."
    ],
  
    amountLimits: {
      1000: 4,
      
    },
    stock: {
      
  
      // etc...
    },
    
    faq: [
      {
        q: "Combien de temps mon code fnac est-il valide?",
        a: "Votre fnac code est valide pendant 12 mois après l'achat."
      },
      {
        q: "Comment puis-je contacter le service client fnac?",
        a: `Vous pouvez contacter le <a href="https://www.fnac.com/help/contact" target="_blank" rel="noopener noreferrer">service client FNAC</a> ici.`
      },
      {
        q: "Comment utiliser mon code fnac?",
        a: `Vous pouvez utiliser votre carte cadeau Fnac en ligne ou en magasin :<br><br>
        <b>En ligne :</b><br>
        1. Ajoutez le produit que vous souhaitez commander à votre panier.<br>
        2. Lors du paiement, choisissez <b>“Chèques-cadeau, cartes cadeau, cagnotte fidélité…”</b>, puis sélectionnez <b>“Vos cartes cadeau”</b> comme mode de paiement.<br>
        3. Entrez votre numéro de carte Fnac et le code complémentaire, puis cliquez sur <b>“Ajouter”</b>.<br>
        4. La carte cadeau sera ensuite utilisée comme mode de paiement.<br><br>
        <b>En magasin :</b><br>
        Dans un magasin Fnac, montrez votre carte cadeau et votre code complémentaire lors du passage en caisse.`
      }
    ],
    amounts: [500, 1000 ]
  },
  
  
  
  "Paysafecard": {
    name: "PaysafeCard",
    img: "assets/paysafecard.png",
    certif: "payvia.fr est revendeur certifié <b>PaysafeCard</b>",
    description: [
      "La solution prépayée idéale pour payer en ligne sans carte bancaire.",
      "Utilisable sur des milliers de sites partenaires : jeux vidéo, paris sportifs, musique, streaming, rencontres, achats numériques et bien plus.",
      "Paiement 100 % anonyme et sécurisé, sans compte bancaire ni carte de crédit.",
      "Code reçu immédiatement par e-mail après paiement en crypto.",
      "Dépensez votre solde en une ou plusieurs fois, aucune date d’expiration."
    ],
  
  
    amountLimits: {
      1000: 3,
      500: 2
    },
    stock: {
     
      500: 3,
      // etc...
    },
  
      faq: [
        {
          q: "Comment fonctionne la carte PaysafeCard ?",
          a: "La carte PaysafeCard est utilisable comme mode de paiement sur de nombreux sites internet comme si payez avec du cash. Lorsque vous achetez une carte PaysafeCard, vous recevez un code (appelé EPIN) que vous pouvez utiliser comme moyen de paiement. Notez bien que PaysafeCard ne fonctionne que sur les sites qui acceptent ce mode de paiement.",
        },
        {
          q: "Que puis-je acheter avec une carte PaysafeCard ?",
          a: "Utilisez PaysafeCard pour régler en toute sécurité sur les sites de paris sportifs, casinos et poker mais également les sites de rencontre en ligne, jeux en ligne ou pour acheter de la musique et des films. Consultez PaysafeCard.com pour découvrir ",
        },
        {
          q: "Comment utiliser ma PaysafeCard ?",
          a: "Sur la plupart des sites Internet, vous pouvez payer directement avec le code PaysafeCard que vous avez acheté. Si cela n'est pas possible, vous pouvez payer en vous connectant à votre compte my PaysafeCard",
        },
        {
          q: "Quelle est la durée de validité de mon code PaysafeCard ?",
          a: "Un code PaysafeCard n'as pas de date limite de validité.",
        },
        {
          q: "Puis-je dépenser le solde de ma carte PaysafeCard en plusieurs fois ?",
          a: "Vous pouvez utiliser votre carte PaysafeCard en autant de fois qu'il vous reste du crédit.",
        },
         {
          q: "Conditions générales de PaysafeCard",
          a: "La revente de votre PaysafeCard est interdite. Les conditions générales de vente et d’utilisation sont disponibles sur www.paysafecard.com<br><br>La revente de votre PaysafeCard est interdite. Les conditions générales de vente et d’utilisation sont disponibles sur www.paysafecard.com<br>Attention!avertissement pour les distributeurs. PaysafeCard ne peut en aucun cas être commandé par téléphone ou par e-mail. En savoir plus: PaysafeCard sécurité.",
        }
      ],
      amounts: [ 500, 1000 ]
    },
    // Ajoute d’autres produits ici selon ta boutique !
  };
  
  // ===========
  // UTILS
  // ===========
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  // ============
  // INITIALISATION
  // ============
  document.addEventListener("DOMContentLoaded", function () {
    // --- Quel produit ?
    const productName = getQueryParam('name') || 'Airbnb';
    const prod = produits[productName] || produits['Airbnb'];
  
    // === MAJ du titre principal
    const title = document.querySelector('.product-title-pro');
    if (title) title.textContent = prod.name;
  
    // === Badge certif
    const certifBadge = document.querySelector('.certified-badge span:last-child');
    if (certifBadge) certifBadge.innerHTML = prod.certif;
  
    // === Logo image dans le header (si présent dans la page)
    const logo = document.querySelector('.product-header-block img');
    if (logo) logo.src = prod.img;
  
    // === Description du produit
  const extraSectionBlock = document.querySelector('.product-extra');
  if (extraSectionBlock && prod.description) {
    extraSectionBlock.innerHTML =
      `<h3>${prod.name}</h3>
       <ul>
        ${prod.description.map(ligne => `<li>${ligne}</li>`).join('')}
       </ul>`;
  }
  
  
    // === FAQ
    const faqSection = document.querySelector('.faq-section');
    if (faqSection && prod.faq) {
      let faqHtml = `<h3>Questions fréquentes</h3>`;
      prod.faq.forEach(item => {
        faqHtml += `
          <details>
            <summary>${item.q}</summary>
            <p>${item.a}</p>
          </details>
        `;
      });
      faqSection.innerHTML = faqHtml;
    }
  
   // ==========================
  // PANIER (persistant dynamique)
  // ==========================
  let panier;
  try {
    panier = JSON.parse(localStorage.getItem('panier'));
    if (!Array.isArray(panier)) panier = [];
  } catch {
    panier = [];
  }
  
  // === Générer les montants
  const amountsList = document.querySelector('.product-amounts-list');
  if (amountsList) {
    let html = '';
    prod.amounts.forEach(amount => {
      // Gestion de la limite par montant
      let maxQty = 10;
      if (prod.amountLimits && prod.amountLimits[amount]) {
        maxQty = prod.amountLimits[amount];
      }
      // Gestion du stock
      let isOut = prod.stock && prod.stock[amount] === 0;
      let options = '';
      if (isOut) {
        options = `<option value="0">0</option>`;
      } else {
        for (let i = 1; i <= maxQty; i++) {
          options += `<option value="${i}">${i}</option>`;
        }
      }
  
      // Construction du bloc HTML pour chaque montant
      html += `
        <div class="giftcard-row" data-value="${amount}">
          <div class="giftcard-logo">
            <img src="${prod.img}" alt="${prod.name} logo"/>
          </div>
          <div class="giftcard-details">
            <div class="giftcard-price-row">
              <span class="giftcard-price">${amount.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €</span>
            </div>
            <div class="giftcard-title">${prod.name} €${amount}</div>
            <hr class="giftcard-inner-separator"/>
            <div class="giftcard-desc">
              Réception instantanée
              <span class="amount-info-icon" data-info="true">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#0D1C2E" stroke-width="2"/><text x="12" y="16" text-anchor="middle" font-size="13" fill="#0D1C2E" font-family="Arial" font-weight="bold">i</text></svg>
              </span>
            </div>
            <hr class="giftcard-inner-separator"/>
            <div class="giftcard-actions">
              <select class="amount-qty-pro" aria-label="Quantité">
                ${options}
              </select>
              <button class="amount-add-btn-pro" type="button" ${isOut ? 'disabled style="opacity:.5;cursor:not-allowed;"' : ''}>
                <span class="btn-text">Ajouter au panier</span>
                <span class="btn-loader" style="display:none;"></span>
              </button>
            </div>
          </div>
        </div>
      `;
    });
  
    amountsList.innerHTML = html;
  
    // Ajout des listeners "Ajouter au panier" sur les boutons fraichement générés
    document.querySelectorAll('.amount-add-btn-pro').forEach(btn => {
      btn.addEventListener('click', function () {
        const card = btn.closest('.giftcard-row');
        const value = parseFloat(card.getAttribute('data-value'));
        const qty = parseInt(btn.parentElement.querySelector('.amount-qty-pro').value, 10);
  
        let found = panier.find(item => item.name === prod.name && item.amount === value);
        if (found) {
          found.qty += qty; // Ajoute à la quantité déjà présente
          // Remplace la quantité par la valeur choisie (PAS cumul)
        } else {
          panier.push({
            name: prod.name,
            img: prod.img,
            amount: value,
            qty: qty,
          });
        }
        localStorage.setItem('panier', JSON.stringify(panier));
        updateCartCount();
  
        // Animation bouton
        const loader = btn.querySelector('.btn-loader');
        const text = btn.querySelector('.btn-text');
        text.style.display = "none";
        loader.style.display = "inline-block";
        loader.innerHTML = '<span class="loader"></span>';
        setTimeout(() => {
          text.style.display = "";
          loader.style.display = "none";
       // === ANIM PANIER HEADER + NOTIF BANNIÈRE ===
  const cartIcon = document.querySelector('.ph-header-icon[aria-label="Mon panier"]');
  const cartCount = document.getElementById('cart-count');
  const confirmBanner = document.getElementById('cart-confirm-banner');
  
  if (cartIcon) {
    cartIcon.classList.add('animate-cart');
    setTimeout(() => cartIcon.classList.remove('animate-cart'), 500);
  }
  if (cartCount) {
    cartCount.classList.add('animate-count');
    setTimeout(() => cartCount.classList.remove('animate-count'), 600);
  }
  if (confirmBanner) {
    confirmBanner.classList.add('show');
    setTimeout(() => confirmBanner.classList.remove('show'), 2500);
  }
  
        }, 700);
      });
    });
  }
  
  
    function updateCartCount() {
      let total = panier.reduce((acc, item) => acc + item.qty, 0);
      const cartCount = document.getElementById('cart-count');
      const cartCountPopup = document.getElementById('cart-count-popup');
      if (cartCount) cartCount.innerText = total;
      if (cartCountPopup) cartCountPopup.innerText = total;
    }
  
    // === Popup panier
    function openCartPopup() {
      const popupBody = document.querySelector('.cart-popup-body');
      let html = "";
      let totalGeneral = 0;
  
      if (panier.length > 0) {
        html += `<div class="cart-popup-list">`;
        panier.forEach(item => {
          const total = item.amount * item.qty;
          totalGeneral += total;
          html += `
            <div class="cart-popup-product" data-value="${item.amount}">
              <div class="cart-popup-product-top">
                <img src="${item.img}" alt="${item.name}" class="cart-popup-img"/>
                <div class="cart-popup-details-compact">
                  <div class="cart-popup-header-row">
                    <span class="cart-popup-title">${item.name}</span>
                    <button class="cart-popup-remove" aria-label="Supprimer du panier" data-value="${item.name}" data-amount="${item.amount}">
                      <svg width="18" height="18" viewBox="0 0 24 24" stroke="#ee4444" stroke-width="2"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
                    </button>
                  </div>
                  <hr class="cart-product-separator"/>
                  <div class="cart-popup-meta-row">
                    <span class="cart-popup-value">${item.amount.toLocaleString('fr-FR', {minimumFractionDigits: 2})} €</span>
                    <span class="cart-popup-qty">× ${item.qty}</span>
                    <span class="cart-popup-total">${total.toLocaleString('fr-FR', {minimumFractionDigits: 2})} €</span>
                  </div>
                </div>
              </div>
            </div>
          `;
        });
        html += `</div>
          <div class="cart-popup-total-block">
            <span class="cart-popup-total-label">Total à payer</span>
            <span class="cart-popup-total-value">${totalGeneral.toLocaleString('fr-FR', {minimumFractionDigits: 2})} €</span>
          </div>
          <div class="cart-popup-btns">
            <button class="cart-btn-view">Voir mon panier</button>
            <button class="cart-btn-order">Commander</button>
          </div>
          <div class="cart-popup-info-badge">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#0D1C2E" stroke-width="2"/><path d="M8.5 13l2.5 2.5L16 10" stroke="#0D1C2E" stroke-width="2" stroke-linecap="round"/></svg>
            Paiement 100% sécurisé
          </div>
        `;
        popupBody.innerHTML = html;
      } else {
        popupBody.innerHTML = `<p id="cart-empty-text">Votre panier est vide</p>`;
      }
  
      // Suppression d’article
      document.querySelectorAll('.cart-popup-remove').forEach(btn => {
        btn.onclick = function(e) {
          e.preventDefault();
          const name = btn.getAttribute('data-value');
          const amount = parseFloat(btn.getAttribute('data-amount'));
          panier = panier.filter(item => !(item.name === name && item.amount === amount));
          localStorage.setItem('panier', JSON.stringify(panier));
          updateCartCount();
          openCartPopup();
        };
      });
  
      // Boutons navigation
      const btnView = document.querySelector('.cart-btn-view');
      if (btnView) btnView.onclick = () => window.location.href = "panier1.html";
      const btnOrder = document.querySelector('.cart-btn-order');
      if (btnOrder) btnOrder.onclick = () => window.location.href = "commander.html";
  
      // Ouvre le popup
      document.getElementById('cart-popup').classList.add('active');
      document.getElementById('cart-blur').classList.add('active');
      document.body.classList.add('popup-open');
    }
  
    // --- Liens header panier
    const openCart = document.getElementById('open-cart');
    if (openCart) openCart.onclick = () => openCartPopup();
    const closeCart = document.getElementById('close-cart');
    const cartBlur = document.getElementById('cart-blur');
    function closeCartPopup() {
      document.getElementById('cart-popup').classList.remove('active');
      document.getElementById('cart-blur').classList.remove('active');
      document.body.classList.remove('popup-open');
    }
    if (closeCart) closeCart.onclick = closeCartPopup;
    if (cartBlur) cartBlur.onclick = closeCartPopup;
  
    // Compte header
    const openAccount = document.getElementById('open-account');
    if(openAccount) openAccount.onclick = () => {
      window.location.href = "Connexion.html";
    };
  
    // Init count au chargement
    updateCartCount();
  });
  
  // ==== POPUP RECHERCHE ====
  
  // Liste des produits pour la recherche rapide (adapte si besoin)
  const produitsRecherche = [
    {
      nom: "Transcash",
      img: "assets/transcash.png",
      description: "E-carte cadeau / à partir de 50,00 €",
      url: "produit.html?name=Transcash"
    },
    {
      nom: "Apple",
      img: "assets/apple.png",
      description: "E-carte cadeau / à partir de 50,00 €",
      url: "produit.html?name=Apple"
    },
    {
      nom: "PCS",
      img: "assets/pcs.png",
      description: "E-carte cadeau / à partir de 50,00 €",
      url: "produit.html?name=PCS"
    },
    {
      nom: "Nike",
      img: "assets/nike.png",
      description: "E-carte cadeau / à partir de 50,00 €",
      url: "produit.html?name=Nike"
    },
    {
      nom: "Fnac",
      img: "assets/fnac.png",
      description: "E-carte cadeau / à partir de 50,00 €",
      url: "produit.html?name=Fnac"
    },
    {
      nom: "Airbnb",
      img: "assets/airbnb.png",
      description: "E-carte cadeau / à partir de 50,00 €",
      url: "produit.html?name=Airbnb"
    },
    {
      nom: "Amazon",
      img: "assets/amazon.png",
      description: "Carte cadeau Amazon, dès 20€",
      url: "produit.html?name=Amazon"
    },
  ];
  
  const openSearch = document.getElementById('open-search');
  const searchPopup = document.getElementById('search-popup');
  const closeSearch = document.getElementById('close-search');
  const searchBlur = document.getElementById('search-blur');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  // OUVERTURE POPUP
  if(openSearch) openSearch.onclick = () => {
    if (!searchPopup || !searchBlur) return;
    searchPopup.classList.add('active');
    searchBlur.classList.add('active');
    document.body.classList.add('popup-open');
    setTimeout(() => {
      if (searchInput) searchInput.focus();
    }, 140);
  };
  
  // FERMETURE POPUP
  function closeSearchPopup() {
    if (!searchPopup || !searchBlur) return;
    searchPopup.classList.remove('active');
    searchBlur.classList.remove('active');
    document.body.classList.remove('popup-open');
  }
  if(closeSearch) closeSearch.onclick = closeSearchPopup;
  if(searchBlur) searchBlur.onclick = closeSearchPopup;
  
  // ESCAPE pour fermer
  window.addEventListener('keydown', function(e){
    if(e.key==="Escape"){
      closeSearchPopup();
    }
  });
  
  // RECHERCHE LIVE
  if(searchInput && searchResults) {
    searchInput.addEventListener('input', function() {
      const query = this.value.trim().toLowerCase();
      searchResults.innerHTML = "";
      if(!query) return;
  
      const filtered = produitsRecherche.filter(p => p.nom.toLowerCase().includes(query));
      if(filtered.length > 0){
        filtered.forEach(prod => {
          searchResults.innerHTML += `
            <div class="search-result-item">
              <img src="${prod.img}" class="search-result-img" alt="${prod.nom}">
              <div class="search-result-infos">
                <div class="search-result-title">${prod.nom} <span style="color:#789;font-size:.97em;">FR</span></div>
                <div class="search-result-desc">${prod.description}</div>
                <a class="search-result-btn" href="${prod.url}">Voir le résultat</a>
              </div>
            </div>
          `;
        });
      } else {
        searchResults.innerHTML = `
          <div class="search-result-suggestion">
            <span>Aucune carte n'a été trouvée<span>
          </div>
          <a class="search-result-btn" href="index.html">Découvrir</a>
        `;
      }
    });
  }
  