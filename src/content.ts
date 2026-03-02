/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const content = {
  navigation: [
    { id: 'home', label: 'ΑΡΧΙΚΗ' },
    { id: 'project', label: 'ΤΟ ΕΡΓΟ' },
    { id: 'partners', label: 'ΣΥΝΕΡΓΑΖΟΜΕΝΟΙ ΦΟΡΕΙΣ' },
    { id: 'news', label: 'ΝΕΑ & ΑΝΑΚΟΙΝΩΣΕΙΣ' },
    { id: 'contact', label: 'ΕΠΙΚΟΙΝΩΝΙΑ' },
  ],
  home: {
    hero: {
      title: 'PREPARE',
      subtitle: 'Personalized Education Framework for AI-Enabled Adaptive and AR-Enhanced Learning',
      description: 'Ένα πλαίσιο εξατομικευμένης εκπαίδευσης που αξιοποιεί την Τεχνητή Νοημοσύνη και την Επαυξημένη Πραγματικότητα για την αναβάθμιση της μαθησιακής εμπειρίας στο Moodle.',
      cta: [
        { label: 'Δείτε τα Αποτελέσματα', target: 'results' },
        { label: 'Γνωρίστε την Τεχνολογία', target: 'tech' },
        { label: 'Οι Δημοσιεύσεις μας', target: 'publications' },
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
    arModules: {
      title: 'AR Modules',
      items: [
        { title: 'AR Explore the Lesson', description: 'Εξερεύνηση των βασικών εννοιών του μαθήματος στον τρισδιάστατο χώρο.' },
        { title: 'AR Mentor Card', description: 'Ψηφιακός μέντορας που εμφανίζεται μέσω AR για καθοδήγηση.' },
        { title: 'AR Concept Explanation', description: 'Οπτικοποίηση σύνθετων εννοιών με 3D μοντέλα.' },
        { title: 'AR Quiz Scanning', description: 'Σάρωση φυσικών αντικειμένων ή εντύπων για την ενεργοποίηση διαδραστικών κουίζ.' },
        { title: 'AR Educational Cards', description: 'Εκπαιδευτικές κάρτες που "ζωντανεύουν" μέσω της κάμερας του κινητού.' },
      ],
    },
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
        venue: 'International Journal of Educational Technology in Higher Education (Under Review)',
        year: '2024',
      },
      {
        type: 'Conference Paper',
        title: 'Integrating RAG-based Chatbots in Moodle: A Case Study on Student Engagement',
        authors: 'Research Team PREPARE',
        venue: 'IEEE International Conference on Advanced Learning Technologies (ICALT)',
        year: '2023',
      },
      {
        type: 'Conference Paper',
        title: 'Hybrid Learner Profiling: Combining FSLSM and Behavioral Logs',
        authors: 'Research Team PREPARE',
        venue: 'International Conference on Artificial Intelligence in Education (AIED)',
        year: '2024',
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
      { name: 'Δρ. Ιωάννης Παπαδόπουλος', role: 'Scientific Coordinator', bio: 'Καθηγητής στο ΔΙΠΑΕ με εξειδίκευση στα Ευφυή Συστήματα Μάθησης και την Τεχνητή Νοημοσύνη.' },
      { name: 'Μαρία Γεωργίου', role: 'AI Architect', bio: 'Ερευνήτρια με εμπειρία στην ανάπτυξη Μεγάλων Γλωσσικών Μοντέλων και συστημάτων RAG.' },
      { name: 'Νικόλαος Παππάς', role: 'Moodle Developer', bio: 'Senior Developer με εξειδίκευση στην αρχιτεκτονική του Moodle και την ανάπτυξη plugins.' },
      { name: 'Ελένη Κωνσταντίνου', role: 'AR Developer', bio: 'Ειδικός στην Επαυξημένη Πραγματικότητα και τον σχεδιασμό εμβυθιστικών εκπαιδευτικών εμπειριών.' },
      { name: 'Ανδρέας Δημητρίου', role: 'Learning Analytics Researcher', bio: 'Υποψήφιος διδάκτορας με ερευνητικό ενδιαφέρον στην εξόρυξη δεδομένων από εκπαιδευτικά συστήματα.' },
      { name: 'Σοφία Νικολάου', role: 'Data Scientist', bio: 'Ειδικός στην ανάλυση δεδομένων και την ανάπτυξη προγνωστικών μοντέλων μηχανικής μάθησης.' },
    ],
  },
  partners: {
    title: 'Συνεργαζόμενοι Φορείς',
    list: [
      { name: 'Διεθνές Πανεπιστήμιο της Ελλάδος (ΔΙΠΑΕ)', description: 'Επικεφαλής φορέας του έργου, υπεύθυνος για τον επιστημονικό σχεδιασμό και την υλοποίηση των αλγορίθμων AI.' },
      { name: 'Εκπαιδευτικός Συνεργάτης', description: 'Φορέας παροχής εκπαιδευτικού περιεχομένου και πεδίο πιλοτικής εφαρμογής του συστήματος.' },
      { name: 'Τεχνολογικοί Συνεργάτες', description: 'Εταιρείες πληροφορικής που συμβάλλουν στη βιομηχανική αξιοποίηση των αποτελεσμάτων.' },
    ],
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
    email: 'info@prepare-project.gr',
    institution: 'Διεθνές Πανεπιστήμιο της Ελλάδος (ΔΙΠΑΕ)',
    lab: 'Εργαστήριο Ευφυών Συστημάτων & Εκπαιδευτικής Τεχνολογίας',
    address: 'Τέρμα Μαγνησίας, 62124, Σέρρες',
  },
};
