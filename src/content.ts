/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const content = {
  navigation: [
    { id: 'home', label: 'ΑΡΧΙΚΗ' },
    { id: 'project', label: 'ΤΟ ΕΡΓΟ' },
    { id: 'partners', label: 'ΣΥΝΕΡΓΑΖΟΜΕΝΟΙ ΦΟΡΕΙΣ' },
    { id: 'team', label: 'ΕΡΕΥΝΗΤΙΚΗ ΟΜΑΔΑ' },
    { id: 'dissemination', label: 'ΔΙΑΧΥΣΗ ΕΡΓΟΥ' },
    { id: 'contact', label: 'ΕΠΙΚΟΙΝΩΝΙΑ' },
  ],
  home: {
    hero: {
      title: 'PREPARE',
      subtitle: 'Personalized Education Framework for AI-Enabled Adaptive and AR-Enhanced Learning',
      description: 'Επαύξηση της Μαθησιακής Εμπειρίας μέσω Εξατομικευμένης και Δυναμικής Χρήσης Εργαλείων Τεχνητής Νοημοσύνης σε LMS: Μια Καινοτόμος Προσέγγιση για Προσαρμοσμένη Εκπαίδευση',
      cta: [
        { label: 'ΠΥΛΩΝΕΣ', target: 'pillars' },
        { label: 'ΤΕΧΝΟΛΟΓΙΑ', target: 'tech' },
        { label: 'ΚΑΙΝΟΤΟΜΙΑ', target: 'innovation' },
      ],
    },
    pillars: [
      { id: 'genai', title: 'Generative AI', description: 'Αυτοματοποιημένη παραγωγή εκπαιδευτικού περιεχομένου και έξυπνοι βοηθοί.' },
      { id: 'adaptive', title: 'Adaptive Learning', description: 'Προσαρμογή της μαθησιακής διαδρομής στις ανάγκες κάθε εκπαιδευόμενου.' },
      { id: 'analytics', title: 'Learning Analytics', description: 'Σε βάθος ανάλυση της συμπεριφοράς και πρόβλεψη της επίδοσης.' },
      { id: 'ar', title: 'AR-enhanced learning', description: 'Επαυξημένη πραγματικότητα για εμβυθιστική και διαδραστική μάθηση.' },
      { id: 'moodle', title: 'Intelligent Moodle', description: 'Μετασχηματισμός του Moodle σε ένα ευφυές οικοσύστημα μάθησης.' },
    ],
  },
  project: {
    title: 'Το Έργο',
    sections: [
      {
        title: 'Ερευνητικό Ερώτημα',
        content: 'Πώς μπορεί ένα παραδοσιακό Σύστημα Διαχείρισης Μάθησης (LMS) να μετατραπεί σε ένα ευφυές περιβάλλον που αντιλαμβάνεται και προσαρμόζεται στις ατομικές ανάγκες κάθε μαθητή σε πραγματικό χρόνο;',
      },
      {
        title: 'Το Πρόβλημα των Παραδοσιακών LMS',
        content: 'Τα παραδοσιακά LMS λειτουργούν συχνά ως στατικές αποθήκες περιεχομένου, προσφέροντας την ίδια εμπειρία σε όλους τους χρήστες (one-size-fits-all), αγνοώντας τις διαφορές στον ρυθμό μάθησης, το υπόβαθρο και τις προτιμήσεις.',
      },
      {
        title: 'Η Ανάγκη για Εξατομίκευση',
        content: 'Η σύγχρονη εκπαίδευση απαιτεί ευελιξία. Η εξατομίκευση ενισχύει τη δέσμευση (engagement) και βελτιώνει τα μαθησιακά αποτελέσματα, μειώνοντας ταυτόχρονα τα ποσοστά εγκατάλειψης.',
      },
      {
        title: 'Ενσωμάτωση AI + Moodle',
        content: 'Το PREPARE εισάγει προηγμένους αλγορίθμους Τεχνητής Νοημοσύνης απευθείας στον πυρήνα του Moodle, επιτρέποντας την αυτοματοποιημένη δημιουργία υλικού και την παροχή έξυπνης υποστήριξης.',
      },
      {
        title: 'Συνάφεια με την Αγορά',
        content: 'Το έργο απευθύνεται τόσο στην τριτοβάθμια εκπαίδευση όσο και στην εταιρική κατάρτιση, προσφέροντας λύσεις που μειώνουν το κόστος παραγωγής περιεχομένου και αυξάνουν την αποτελεσματικότητα της εκπαίδευσης.',
      },
    ],
    images: [
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  tech: {
    title: 'Τεχνολογική Υλοποίηση',
    aiPipeline: {
      title: 'AI Content Generation Pipeline',
      description: 'Μια ολοκληρωμένη ροή εργασίας που μετατρέπει στατικά αρχεία (PDF) σε πολυμορφικό εκπαιδευτικό υλικό:',
      items: ['Περιλήψεις (Summaries)', 'Διαφάνειες (Slides)', 'Κουίζ (Quizzes)', 'Podcasts', 'Video Lectures', 'AR Experiences'],
    },
    features: [
      { title: 'RAG-based Chatbot', description: 'Ένας έξυπνος βοηθός εντός του Moodle που απαντά σε ερωτήσεις βασισμένος αποκλειστικά στο υλικό του μαθήματος (Retrieval-Augmented Generation).' },
      { title: 'Hybrid Learner Model', description: 'Συνδυασμός του ερωτηματολογίου FSLSM (Felder-Silverman) με την ανάλυση της πραγματικής συμπεριφοράς του χρήστη στο σύστημα.' },
      { title: 'Moodle Log Analysis', description: 'Επεξεργασία των logs του Moodle για την εξαγωγή μοτίβων μάθησης.' },
      { title: 'Dynamic Diagrams', description: 'Οπτικοποίηση της απόκλισης μεταξύ του δηλωμένου μαθησιακού τύπου και των πραγματικών ενεργειών του μαθητή.' },
      { title: 'Time Tracking', description: 'Παρακολούθηση του χρόνου που αφιερώνει ο κάθε φοιτητής ανά ενότητα και δραστηριότητα.' },
      { title: 'Reminder System', description: 'Αυτοματοποιημένο σύστημα ειδοποιήσεων για περιπτώσεις αδράνειας ή καθυστέρησης.' },
      { title: 'Grade Prediction', description: 'Αλγόριθμος πρόβλεψης τελικής βαθμολογίας με βάση την ενδιάμεση πρόοδο.' },
      { title: 'LLM-as-a-judge', description: 'Χρήση Μεγάλων Γλωσσικών Μοντέλων για την αξιολόγηση της ποιότητας των παραγόμενων απαντήσεων και περιεχομένου.' },
      { title: 'Privacy & Compliance', description: 'Πλήρης εναρμόνιση με τον GDPR και το EU AI Act για την προστασία των προσωπικών δεδομένων.' },
    ],
  },
  innovation: {
    title: 'Καινοτομία & Επιστημονική Συνεισφορά',
    points: [
      { title: 'End-to-end Generative AI Pipeline', description: 'Η πρώτη πλήρης υλοποίηση παραγωγικής ΤΝ ενσωματωμένης σε ένα mainstream LMS όπως το Moodle.' },
      { title: 'Non-prescriptive Personalization', description: 'Εξατομίκευση που δεν περιορίζει τον μαθητή, αλλά του προτείνει τις βέλτιστες διαδρομές.' },
      { title: 'Inclusive Design', description: 'Πολυτροπική μάθηση (κείμενο, ήχος, βίντεο, AR) που εξασφαλίζει την προσβασιμότητα για όλους.' },
      { title: 'Ethical AI Deployment', description: 'Ανάπτυξη ηθικών πλαισίων για τη χρήση της ΤΝ στην εκπαίδευση, με έμφαση στη διαφάνεια.' },
      { title: 'Hybrid Learner Profiling', description: 'Καινοτόμος συνδυασμός ψυχομετρικών δεδομένων και ανάλυσης συμπεριφοράς.' },
      { title: 'System-level Validation', description: 'Επιστημονική επικύρωση της αποτελεσματικότητας του συστήματος σε πραγματικές συνθήκες διδασκαλίας.' },
    ],
  },
  results: {
    title: 'Αποτελέσματα',
    items: [
      { title: 'Functional Moodle Prototype', description: 'Ένα πλήρως λειτουργικό πρωτότυπο του Moodle με ενσωματωμένα τα plugins του PREPARE.' },
      { title: 'AI Chatbot Tutor', description: 'Εξειδικευμένος ψηφιακός βοηθός για κάθε μάθημα.' },
      { title: 'AR Chapter Experiences', description: 'Σειρά εμπειριών επαυξημένης πραγματικότητας για επιλεγμένες θεματικές ενότητες.' },
      { title: 'Automated Course Generation', description: 'Εργαλείο που μειώνει τον χρόνο δημιουργίας ενός μαθήματος κατά 70%.' },
      { title: 'Learning Analytics Dashboard', description: 'Πίνακας ελέγχου για τους διδάσκοντες με αναλυτικά στοιχεία προόδου.' },
      { title: 'Predictive Modeling', description: 'Μοντέλα πρόβλεψης με ακρίβεια άνω του 85% στην αναγνώριση φοιτητών σε κίνδυνο.' },
      { title: 'User Profiling Model', description: 'Ένα εξελιγμένο μοντέλο κατηγοριοποίησης εκπαιδευομένων.' },
    ],
  },
  publications: {
    title: 'Δημοσιεύσεις',
    list: [
      {
        type: 'Journal Article',
        title: 'AI for All: Adaptive, Accessible, and Inclusive Learning Experiences in the Age of Intelligent LMSs',
        authors: 'Research Team PREPARE',
        venue: 'MDPI Information - Special Issue Human–Computer Interactions and Computer-Assisted Education',
        year: '2026',
        link: 'https://www.mdpi.com/2078-2489/17/2/216',
      },
      {
        type: 'Journal Article',
        title: 'Predicting Student Performance and Enhancing Learning Outcomes: A Data-Driven Approach Using Educational Data Mining Techniques',
        authors: 'Research Team PREPARE',
        venue: 'MDPI Computers - Special Issue Present and Future of E-Learning Technologies (2nd Edition)',
        year: '2025',
        link: 'https://www.mdpi.com/2073-431X/14/3/83',
      },
      {
        type: 'Conference Paper',
        title: 'Playing Telephone with AI: How Uninformed Use of AI Tools May Distort Educational Outcomes',
        authors: 'Research Team PREPARE',
        venue: 'International Conference on Advances in Artificial Intelligence and Machine Learning (AAIML 2026)',
        year: '2026',
        link: 'https://www.aaiml.net/index.html',
      },
      {
        type: 'Conference Paper',
        title: 'LEAP: A Deep Learning Pipeline for Early Prediction of Student Learning Outcomes from LMS Logs',
        authors: 'Research Team PREPARE',
        venue: 'International Conference on Advances in Artificial Intelligence and Machine Learning (AAIML 2026)',
        year: '2026',
        link: 'https://www.aaiml.net/index.html',
      },
      {
        type: 'Conference Paper',
        title: 'ARES: Adaptive Real-Time Evaluation System for Cognitive and Tactical Performance in Football Training',
        authors: 'Research Team PREPARE',
        venue: 'International Conference on Advances in Artificial Intelligence and Machine Learning (AAIML 2026)',
        year: '2026',
        link: 'https://www.aaiml.net/index.html',
      },
      {
        type: 'Conference Paper',
        title: 'The Museum That Feels: AI-Driven Affective Computing for Emotion-Adaptive AR Experiences',
        authors: 'Research Team PREPARE',
        venue: 'International Conference on Advances in Artificial Intelligence and Machine Learning (AAIML 2026)',
        year: '2026',
        link: 'https://www.aaiml.net/index.html',
      },
    ],
  },
  dissemination: {
    title: 'Διάχυση & Συνέδρια',
    activities: [
      { title: 'Συμμετοχή σε Συνέδρια', description: 'Παρουσίαση των αποτελεσμάτων σε διεθνή επιστημονικά συνέδρια πληροφορικής και εκπαίδευσης.' },
      { title: 'Workshops', description: 'Διοργάνωση εργαστηρίων για την εκπαίδευση καθηγητών στη χρήση των νέων εργαλείων.' },
      { title: 'Demonstrations', description: 'Ζωντανές επιδείξεις της πλατφόρμας σε εκπαιδευτικούς φορείς.' },
      { title: 'Industry Outreach', description: 'Επαφές με την αγορά EdTech για τη μεταφορά τεχνογνωσίας.' },
      { title: 'School Collaborations', description: 'Πιλοτικές εφαρμογές σε συνεργαζόμενα σχολεία και εκπαιδευτήρια.' },
      { title: 'Knowledge Transfer', description: 'Δράσεις μεταφοράς γνώσης προς την ακαδημαϊκή κοινότητα.' },
    ],
  },
  team: {
    title: 'Ερευνητική Ομάδα',
    members: [
      { name: 'Καθ. Τσιμπήρης Αλκιβιάδης', role: 'ΕΠΙΣΤΗΜΟΝΙΚΑ ΥΠΕΥΘΥΝΟΣ ΕΡΓΟΥ', bio: 'Καθηγητής στο ΔΙΠΑΕ με εξειδίκευση στα Ευφυή Συστήματα Μάθησης και την Τεχνητή Νοημοσύνη.', image: 'https://media.licdn.com/dms/image/v2/C5603AQH3VWwSGzcRHQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516540730790?e=1773878400&v=beta&t=hCtnZKFLRaRZY7d4VT494boBywtvHo_DVxHFSC_9a9c' },
      { name: 'Καθ. Βαρσάμης Δημήτριος', role: 'ΣΥΝΕΡΓΑΖΟΜΕΝΟ ΜΕΛΟΣ ΔΕΠ', bio: 'Καθηγητής στο ΔΙΠΑΕ με εμπειρία στον προγραμματισμό επιστημονικών εφαρμογών.', image: 'https://www.ict.ihu.gr/wp-content/uploads/2023/03/photo_varsamis_dimitrios.jpg' },
      { name: 'Καθ. Καρυδάκης Γιώργος', role: 'ΣΥΝΕΡΓΑΖΟΜΕΝΟ ΜΕΛΟΣ ΔΕΠ', bio: 'Καθηγητής στο Πανεπιστήμιο Αιγαίου με εμπειρία στα Ευφυή Συστήματα Αλληλεπίδρασης', image: 'https://www.goinsane.gr/wp-content/uploads/2024/03/george_caridakis_profile_bw.jpg' },
      { name: 'Καθ. Στρουθόπουλος Χαράλαμπος', role: 'ΣΥΝΕΡΓΑΖΟΜΕΝΟ ΜΕΛΟΣ ΔΕΠ', bio: 'Καθηγητής στο ΔΙΠΑΕ με εμπειρία στην Μηχανική Μάθηση', image: 'data:image/jpeg;base64,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' },
      { name: 'Δρ. Κωνσταντάκης Μάρκος ', role: 'UX/AI EXPERT', bio: 'Senior Developer με εξειδίκευση στην αρχιτεκτονική του Moodle και την ανάπτυξη AI plugins.', image: 'https://res.cloudinary.com/direhbhyf/image/upload/v1772531296/Markos2025_mf586c.jpg' },
      { name: 'Αγγειοπλάστης Αθανάσιος ', role: 'MOODLE DEVELOPER', bio: 'Υποψήφιος διδάκτορας με ερευνητικό ενδιαφέρον στην εξόρυξη δεδομένων από εκπαιδευτικά συστήματα.', image: 'https://media.licdn.com/dms/image/v2/C4D03AQGoXaLNyjkH2g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1605533947861?e=1773878400&v=beta&t=h8rX5yUtcuAGWqIA8WjUHtliqHY1RoRUq2f5fN74zRM' },
      { name: 'Ορδουμποζάνης Κωνσταντίνος', role: 'AI SENIOR DEVELOPER', bio: 'Υποψήφιος διδάκτορας με εξειδίκευση σε AI agents.', image: 'https://media.licdn.com/dms/image/v2/D4D03AQFTkXo3MqZMGQ/profile-displayphoto-crop_800_800/B4DZoFmveGH4AI-/0/1761030634270?e=1773878400&v=beta&t=hojct1gCX4Q9617g0zspWmUrDcKmfq7XfaPdaYbEQvY' },
      { name: 'Αλιπράντης Ιωάννης', role: 'VR SENIOR DEVELOPER', bio: 'Υποψήφιος διδάκτορας με εξειδίκευση στην Επαυξημένη Πραγματικότητα και τον σχεδιασμό εμβυθιστικών εκπαιδευτικών εμπειριών.', image: 'https://media.licdn.com/dms/image/v2/D4D03AQEdFqa1ITo0qw/profile-displayphoto-crop_800_800/B4DZxMYsM5JwAI-/0/1770808069259?e=1773878400&v=beta&t=GRqqOpu1tgoh4MYpGHlgddgIEq4n9Pelw-ILkh7m1Zw' },
      { name: 'Μυλλής Γεώργιος', role: 'LEARNING ANALYTICS RESEARCHER', bio: 'Ειδικός στην ανάλυση δεδομένων και την ανάπτυξη προγνωστικών μοντέλων μηχανικής μάθησης.', image: 'https://media.licdn.com/dms/image/v2/D4D03AQFQNAkG9JLG6Q/profile-displayphoto-crop_800_800/B4DZqCMfeyHsAI-/0/1763120907221?e=1773878400&v=beta&t=JL0zB1gFZ0hzD--2CjaRWCbSo2EFJjDRWQRQK6FHo2I' },
    ],
  },
  partners: {
    title: 'Συνεργαζόμενοι Φορείς',
    list: [
      { name: 'Διεθνές Πανεπιστήμιο της Ελλάδος (ΔΙΠΑΕ)', description: 'Επικεφαλής φορέας του έργου, υπεύθυνος για τον επιστημονικό σχεδιασμό και την υλοποίηση των αλγορίθμων AI.', image: 'https://www.ihu.gr/wp-content/uploads/2024/01/ihu-gr-logo-created17m519.png' },
      { name: 'Εκπαιδευτήρια ΑΘΗΝΑ', description: 'Φορέας παροχής εκπαιδευτικού περιεχομένου και πεδίο πιλοτικής εφαρμογής του συστήματος.', image: 'https://athina-sch.gr/wp-content/uploads/2024/12/athina-logo-3.png' },
    ],
    footerText: 'Η συνεργασία των δύο φορέων εξασφαλίζει τη σύνδεση της ακαδημαϊκής έρευνας με την εκπαιδευτική πράξη, δημιουργώντας ένα ολοκληρωμένο πλαίσιο για την ανάπτυξη και αξιολόγηση του Intelligent Moodle.'
  },
  news: {
    title: 'Νέα & Ανακοινώσεις',
    posts: [
      { date: '15 Μαρτίου 2024', title: 'Έναρξη της πιλοτικής λειτουργίας του Intelligent Moodle', content: 'Η πλατφόρμα είναι πλέον διαθέσιμη για τους πρώτους φοιτητές του τμήματος.' },
      { date: '10 Φεβρουαρίου 2024', title: 'Παρουσίαση στο Διεθνές Συνέδριο EdTech', content: 'Η ομάδα του PREPARE παρουσίασε το AI Content Pipeline με μεγάλη επιτυχία.' },
      { date: '20 Ιανουαρίου 2024', title: 'Δημοσίευση άρθρου σε έγκριτο επιστημονικό περιοδικό', content: 'Το άρθρο μας για την προσβασιμότητα μέσω AI έγινε δεκτό για δημοσίευση.' },
      { date: '05 Ιανουαρίου 2024', title: 'Ολοκλήρωση των AR Modules', content: 'Τα πρώτα πέντε σενάρια επαυξημένης πραγματικότητας είναι έτοιμα για χρήση.' },
    ],
  },
  contact: {
    title: 'Επικοινωνία',
    email: 'seaprepare@gmail.com',
    institution: 'Διεθνές Πανεπιστήμιο της Ελλάδος (ΔΙΠΑΕ)',
    lab: 'Εργαστήριο Ευφυών Συστημάτων & Εκπαιδευτικής Τεχνολογίας',
    address: 'Τέρμα Μαγνησίας, 62124, Σέρρες',
  },
};
