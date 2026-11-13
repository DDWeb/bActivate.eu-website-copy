// Per-route FAQ sets for /what-is-bactivate, /when-to-use and /studies-effect.
//
// The visible accordion (FAQSection) and the FAQPage structured data injected
// by scripts/prerender.mjs are both generated from THESE arrays, so the markup
// can never describe questions the reader cannot see. Keep the
// `question: "..."` / `answer: "..."` shape: prerender.mjs parses it with a
// regex, exactly as it does for src/components/FAQSection.tsx.

export const whatIsFaqItems = [
  {
    question: "What is bActivate?",
    answer: "bActivate is a veterinary bacterial growth medium used to detect dormant Streptococcus equi subspecies zooepidemicus infections in the equine uterus. A veterinarian instils it into the uterus of problem mares (non-pregnant mares that fail to conceive despite normal cycles and clean swabs). By providing nutrients that reactivate dormant bacteria, bActivate makes a previously undetectable uterine infection visible to standard swab culture within 48 hours.",
  },
  {
    question: "Is bActivate a diagnostic tool?",
    answer: "Yes. bActivate is a diagnostic growth medium. It wakes dormant Streptococcus zooepidemicus in the lining of the uterus so the bacteria grow again: a standard swab 48 hours later can find them, and penicillin can now reach them. Once the bacteria are identified, the veterinarian prescribes targeted antibiotics from the sensitivity test.",
  },
  {
    question: "Who developed bActivate?",
    answer: "bActivate was developed by Prof. Anders Miki Bojesen DVM PhD, Professor of Veterinary Microbiology at the University of Copenhagen, and Dr. Morten Ronn Petersen DVM PhD Dipl. ACT, a veterinarian and researcher at Rigshospitalet Fertility Clinic in Copenhagen. Both researchers have extensive publication records in equine reproductive microbiology and Streptococcus zooepidemicus.",
  },
  {
    question: "What is subclinical endometritis in mares?",
    answer: "Subclinical endometritis is a persistent low-grade uterine infection in mares that shows no obvious clinical signs such as discharge or fever. It is caused by dormant Streptococcus equi subspecies zooepidemicus living in a biofilm state deep in the uterine endometrium. The condition causes recurring fertility failure, early embryo loss, and accumulation of uterine fluid after breeding. Standard uterine swabs miss this infection in the majority of affected mares because the bacteria are not actively growing.",
  },
  {
    question: "How does bActivate work?",
    answer: "A veterinarian instils 10 ml of bActivate into the uterus of the problem mare during early estrus. The growth medium provides nutrients that signal dormant Streptococcus zooepidemicus to reactivate and resume normal growth. After 48 hours, a standard uterine swab culture is taken. Bacteria that were previously invisible are now detectable, enabling accurate diagnosis and targeted antibiotic treatment.",
  },
  {
    question: "What makes a mare a problem mare or barren mare?",
    answer: "A problem mare (also called a barren mare or non-pregnant mare) is a mare that repeatedly fails to conceive despite normal ovarian cycles, breeding to a fertile stallion, and passing routine reproductive examinations including clean uterine cultures. The classic presentation of dormant subclinical endometritis is a mare that tests negative on swabs but cannot sustain pregnancy. These mares often have a history of uterine fluid accumulation, early embryo loss, or multiple open seasons.",
  },
  {
    question: "Is bActivate approved or registered?",
    answer: "In the United States bActivate is a registered veterinary product covered by US Patent 8,633,007. In the European Union and the United Kingdom it is not registered as a veterinary medicinal product and is positioned as a diagnostic tool for detecting dormant Streptococcus zooepidemicus. Ask your national veterinary medicines authority if you need to confirm the classification in your country.",
  },
];

export const whenToUseFaqItems = [
  {
    question: "Which mares are most likely to carry a dormant uterine infection?",
    answer: "Problem mares that are 12 or older, have had three or more foals, or have had endometritis or an abortion before. Fluid after covering, an early loss and two or more failed cycles with good timing also count. Any one of them is a reason to ask the vet for an activation culture with bActivate.",
  },
  {
    question: "My mare is 12 and has had three foals, but her swab is clean. What should I ask the vet?",
    answer: "Ask for an activation culture with bActivate in her next early estrus. A clean swab does not rule out a dormant infection: in a direct comparison, swab culture found 34 % of infected mares and biopsy culture 82 % (Nielsen 2005).",
  },
  {
    question: "When should bActivate be used on a problem mare?",
    answer: "bActivate is indicated for mares that have failed to conceive for two or more consecutive breeding cycles despite normal ovarian cycles, breeding to a fertile stallion, and negative routine uterine culture. It is also indicated when a mare shows signs consistent with uterine infection (uterine fluid on ultrasound, early embryo loss, irregular cycles) but standard swabs return negative results. Some practices use it as a screening tool for all open mares at the start of the off-season.",
  },
  {
    question: "What are the signs that a mare has a hidden uterine infection?",
    answer: "The main signs are: failure to conceive despite multiple breedings to a fertile stallion, a negative routine uterine swab that does not explain the fertility failure, accumulation of uterine fluid visible on ultrasound around estrus, early embryo loss (days 14 to 25 after ovulation), and a history of two or more open seasons. These signs combined with a negative swab are the classic presentation of dormant subclinical endometritis caused by Streptococcus zooepidemicus in non-pregnant mares.",
  },
  {
    question: "How many failed breeding attempts before trying bActivate on a non-pregnant mare?",
    answer: "Most veterinarians consider bActivate after two failed consecutive breeding cycles in a mare with no other identifiable cause. The Hagyard clinical study included mares barren for 3 or more consecutive seasons. In high-value mares or mares approaching the end of their breeding career, earlier investigation may be warranted. Some practices use bActivate as a routine diagnostic on all non-pregnant mares at the end of each breeding season.",
  },
  {
    question: "Can bActivate be used on any non-pregnant mare or barren mare?",
    answer: "bActivate is intended for non-pregnant mares (also called barren mares or problem mares) suspected of having dormant subclinical uterine infections caused by Streptococcus equi subspecies zooepidemicus. It is administered by a veterinarian and is most appropriate for mares with unexplained fertility failure and negative routine cultures. It is not a first-line tool for mares with acute visible signs of infection such as purulent discharge or positive routine culture results.",
  },
  {
    question: "Should bActivate be used before or after antibiotics?",
    answer: "bActivate should be used before antibiotics when the goal is accurate diagnosis. Administering antibiotics before bActivate may suppress bacterial reactivation and produce a false-negative post-activation culture. The correct protocol is: instil bActivate, obtain a post-activation culture 48 hours later, then begin targeted antibiotic therapy based on the culture result. The mare is not bred in the same estrus cycle but in the following one.",
  },
  {
    question: "Is bActivate used instead of a standard uterine swab?",
    answer: "No. bActivate is used in addition to standard diagnostic procedures, not instead of them. The recommended protocol includes a pre-activation culture before bActivate instillation and a post-activation culture 48 hours later. Comparing the two cultures confirms whether dormant bacteria were present. bActivate does not replace routine culture but extends diagnostic accuracy to mares with dormant infections that standard culture would otherwise miss.",
  },
  {
    question: "Can bActivate be used during the breeding season?",
    answer: "Yes. bActivate is designed for use during the active breeding season. It is administered during early estrus when the largest follicle is over 20 mm. The mare is not bred in that same estrus cycle. After a positive post-activation culture and appropriate antibiotic treatment, the mare is bred in the following cycle. In clinical studies this approach achieved an 83% pregnancy rate in problem mares that had previously failed to conceive.",
  },
];

export const studiesFaqItems = [
  {
    question: "What pregnancy rate has bActivate achieved in clinical studies?",
    answer: "In the largest clinical evaluation, at Hagyard Equine Medical Institute in Lexington, Kentucky, Dr. Kristina Lu's team activated and treated 64 problem Thoroughbred mares (barren for 3 or more consecutive seasons). 83% became pregnant (53 of 64 mares). A separate field study at Kildangan Stud, operated by Godolphin, reported an 89% pregnancy rate among bred problem mares (16 of 18). The studies were carried out at independent clinics and studs; the founders of bActivate co-authored the reporting of the results.",
  },
  {
    question: "Why do problem mares test negative on routine uterine swabs even when infected?",
    answer: "Standard uterine swab culture relies on active bacterial growth. In problem mares and non-pregnant mares, Streptococcus equi subspecies zooepidemicus often enters a dormant, biofilm-protected state deep inside the uterine endometrium. Dormant bacteria have a very low metabolic rate and do not grow on standard culture media, producing a false-negative result even when the infection is present and actively preventing conception. bActivate reactivates these dormant bacteria so they become detectable by standard culture within 48 hours.",
  },
  {
    question: "How many mares have been studied with bActivate?",
    answer: "The Hagyard clinical study included 64 barren Thoroughbred mares, all of whom had failed to conceive for 3 or more consecutive breeding seasons. The Kildangan/Godolphin study included 19 problem mares. A peer-reviewed laboratory study (Petersen et al., Veterinary Microbiology, 2015) included 37 mares and confirmed bActivate activated dormant bacteria in 64% of treated mares versus 8% in untreated controls.",
  },
  {
    question: "What was the live foal rate in the bActivate Hagyard study?",
    answer: "Of the 64 problem mares treated at Hagyard, 53 (83%) became pregnant. Of the 46 mares with confirmed foaling outcomes, 32 (70%) delivered live foals. These were mares with a history of 3 or more failed breeding seasons before receiving bActivate.",
  },
  {
    question: "Is bActivate supported by peer-reviewed research?",
    answer: "Yes. The core laboratory science is published in Veterinary Microbiology (Petersen et al., 2015, DOI 10.1016/j.vetmic.2015.06.006), a placebo-controlled study confirming bActivate reactivates dormant Streptococcus zooepidemicus in mares. The Hagyard clinical data was presented at the Society for Theriogenology Annual Conference (Petersen and Bojesen, Clinical Theriogenology, 2014), and the Kildangan field study was published as a congress abstract in the Journal of Equine Veterinary Science (2018, DOI 10.1016/j.jevs.2018.05.162). The founders of bActivate are authors on these publications.",
  },
  {
    question: "Where has bActivate been evaluated clinically?",
    answer: "The Hagyard study was led by Dr. Kristina Lu at one of the world's largest equine hospitals, in Lexington, Kentucky. The Kildangan/Godolphin field study was run with Meta Osborne MVB at one of the world's premier Thoroughbred breeding operations, in Ireland. The clinics and studs are independent of the manufacturer; the founders of bActivate introduced the activation protocol and co-authored the reporting, which was presented at scientific conferences and published as a congress abstract in the Journal of Equine Veterinary Science (2018).",
  },
];

// /equine-endometritis hub page
export const endometritisFaqItems = [
  {
    question: "Can a mare have endometritis with a clean swab?",
    answer: "Yes. In a direct comparison, swab culture found 34 % of infected mares and biopsy culture 82 % (Nielsen 2005). Dormant bacteria deep in the lining do not reach the swab and do not grow on the plate.",
  },
  {
    question: "Is subclinical endometritis contagious?",
    answer: "Streptococcus zooepidemicus lives on healthy horses and is an opportunist rather than a contagious disease of the uterus. The risk is the individual mare's inability to clear it, not spread between mares.",
  },
  {
    question: "How long after covering should fluid be gone?",
    answer: "A healthy mare clears semen and inflammatory fluid within about 48 hours. Fluid that persists beyond that is the classic sign of delayed uterine clearance and should be discussed with the vet before the next cover.",
  },
  {
    question: "How does bActivate help with endometritis?",
    answer: "It finds the dormant form. Activation culture with bActivate wakes dormant bacteria so they grow in the standard culture and can be identified and tested for antibiotic sensitivity. The veterinarian then treats according to that result.",
  },
  {
    question: "When should a breeder ask for the activation culture?",
    answer: "When a mare stays empty after two or more well-timed covers with proven semen, after an early loss, with fluid on the ultrasound, or with a clean swab and still no pregnancy. The mares in the published series had been empty for at least three cycles.",
  },
  {
    question: "Culture and cytology came back clean, but she still didn't take. What now?",
    answer: "A clean culture and cytology rules out an active infection at the surface, not a dormant one deeper in the lining. In a direct comparison, swab culture found 34 % of infected mares and biopsy culture 82 % (Nielsen 2005), because the bacteria sit 300 to 500 micrometers down and do not grow on the plate. The next step is a sample that reaches deeper, a biopsy or a low-volume lavage, or an activation culture, where the vet wakes the dormant bacteria before culturing. In the activation study, 64 % of the activated mares grew bacteria against 8 % of the controls (Petersen 2015). Ask your vet, or a repro vet, which of the three fits your mare.",
  },
  {
    question: "My mare absorbed at 30 days. Could it be an infection?",
    answer: "It can. An early loss before day 40 has several causes: twins, an aged lining, embryo quality, stress, and endometritis, which is the one most often missed because the swab does not find it. One loss in a young mare with no history is usually left to the next cycle. A mare that has absorbed before, is 12 or older, or has fluid on the scan should have the uterus checked with a method that reaches deeper than the swab before she is covered again.",
  },
  {
    question: "Is my mare too old to breed, or is something else going on?",
    answer: "Age lowers fertility on its own, but it also makes a hidden infection more likely, because the lining clears bacteria less well with age and parity. Before a season is written off to age, the vet can rule out a dormant infection with a biopsy or an activation culture. In the published series, 47 to 87 % of problem mares carried a dormant infection that the standard swab had missed. That is a cause with a name and a treatment, which age is not.",
  },
];

export const swabFaqItems = [
  {
    question: "How accurate is a uterine swab culture in mares?",
    answer: "In a direct comparison, culture from a uterine swab found 34% of infected mares and culture from an endometrial biopsy found 82% (Nielsen, Theriogenology 2005). A positive swab is reliable. A negative swab does not rule out infection.",
  },
  {
    question: "Why can a mare have a clean swab and still be infected?",
    answer: "In chronically infected mares, Streptococcus zooepidemicus has been found in foci 300 to 500 micrometers below the surface of the uterine lining (Petersen et al., Clinical Theriogenology 2009). A swab samples only the surface, and dormant bacteria do not grow in culture.",
  },
  {
    question: "What does bActivate add to a swab culture?",
    answer: "bActivate is a growth medium the veterinarian instills in the uterus in early estrus. It makes dormant bacteria grow again, so a normal swab taken 48 hours later can find them. In the placebo-controlled study the organism was found in 64% of mares after activation and in 8% after saline (Petersen et al., Veterinary Microbiology 2015).",
  },
  {
    question: "Does bActivate replace the swab, the lavage or the biopsy?",
    answer: "No. It is used before the sample is taken. The sample after activation is an ordinary uterine swab, cultured in the usual way.",
  },
  {
    question: "Is a biopsy better than a swab?",
    answer: "For culture, yes. A biopsy samples the tissue itself and found 82% of infected mares against 34% for the swab (Nielsen, Theriogenology 2005), and it also shows the condition of the lining. It still does not find bacteria that are dormant.",
  },
];

export const howToUseFaqItems = [
  {
    question: "When in the cycle is bActivate used?",
    answer: "In early estrus, when the largest follicle is over 20 mm. The veterinarian takes a uterine culture first and then instills 10 ml of bActivate.",
  },
  {
    question: "When is the culture after activation taken?",
    answer: "48 hours after bActivate was instilled. This is the post-activation culture, and a normal uterine swab is enough at that point, because the bacteria that were dormant are now growing.",
  },
  {
    question: "What happens if the culture after activation is positive?",
    answer: "The veterinarian treats according to the antibiogram, with uterine and systemic antibiotics. The cycle is used for diagnosis and treatment, and the mare is covered on the next one.",
  },
  {
    question: "What does it mean if the culture after activation is negative?",
    answer: "The culture taken 48 hours after bActivate grew no bacteria. A dormant streptococcal infection is then unlikely, and the veterinarian goes on to look for other causes of the mare staying empty.",
  },
  {
    question: "Why is the mare cultured both before and after activation?",
    answer: "Because the comparison is the result. Some mares are culture-positive for E. coli before activation and for Streptococcus zooepidemicus only afterwards.",
  },
  {
    question: "What happens after bActivate?",
    answer: "bActivate wakes dormant Streptococcus zooepidemicus in the lining of the uterus, so the bacteria grow again. That does two things: a normal swab 48 hours later can find them, and penicillin can now reach them. If the culture is positive, the vet treats according to the sensitivity test and the mare is covered in the following cycle. If nothing grows, a dormant streptococcal infection is unlikely and the search moves on.",
  },
];

// /activation-culture definition page
export const activationCultureFaqItems = [
  {
    question: "What is a post-activation culture?",
    answer: "The culture taken 48 hours after the vet has instilled bActivate. It is a normal uterine culture; the difference is that dormant bacteria are now growing and can be found.",
  },
  {
    question: "Does activation culture need a lavage?",
    answer: "No. After activation with bActivate a normal swab is enough. A low-volume lavage or a biopsy can be used if the vet prefers.",
  },
  {
    question: "How long does activation culture take?",
    answer: "Two days from instillation to sample, and the culture result one or two days after that. The mare is covered in the following cycle.",
  },
  {
    question: "What if the activation culture is negative?",
    answer: "Then a dormant streptococcal infection is unlikely, and the vet looks for another cause, such as fluid after covering, the cervix or the biopsy grade.",
  },
];

// /our-distributors (spor 4)
export const distributorsFaqItems = [
  {
    question: "How do I get bActivate for my mare?",
    answer: "Ask your vet for an activation culture with bActivate in the mare's next early estrus. Your vet orders it from the distributor in your country, or you can order it online from the manufacturer. In the US, Hagyard Pharmacy and Midwest Veterinary Supply set their own prices; one vial is one activation for one mare.",
  },
  {
    question: "Can I buy bActivate without a vet?",
    answer: "You can order it, but only a veterinarian can instill it and take the cultures. Plan the activation cycle with your vet first.",
  },
  {
    question: "Is there a distributor in my country?",
    answer: "There are distributors in the UK, the Netherlands, Denmark, the US and Australia. Everywhere else, bActivate is shipped from Copenhagen; write to us if you are unsure.",
  },
];
