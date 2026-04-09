// ==========================================================
// DISCRETE MATHEMATICS STUDY GUIDE — DATA + RENDERER
// ==========================================================

const SECTIONS = [
  // ── SET THEORY ──
  {
    id: 'set', cls: 's-set',
    title: 'Set Theory',
    sub: 'Questions 1 to 10 · Union, Intersection, Complement, Power Set',
    gradient: '',
    questions: [
      {
        id: 'q1',
        title: 'Prove: A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C) (Distributive Law)',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'This is the <strong>Distributive Law of Set Theory</strong>. It says "union distributes over intersection", just like multiplication distributes over addition in algebra (a×(b+c) = a×b + a×c). We prove it by showing every element on the left side is also on the right, and vice versa.' },
          { type: 'ans', label: '✅ Proof', content: [
            { steps: [
              { n: '→', t: '<strong>Forward direction:</strong> Let x ∈ A ∪ (B ∩ C). Then x ∈ A, or x ∈ (B ∩ C).' },
              { n: '→', t: 'Case 1: x ∈ A → x ∈ A ∪ B AND x ∈ A ∪ C → x ∈ (A ∪ B) ∩ (A ∪ C)' },
              { n: '→', t: 'Case 2: x ∈ B ∩ C → x ∈ B AND x ∈ C → x ∈ A ∪ B AND x ∈ A ∪ C → same conclusion' },
              { n: '←', t: '<strong>Backward direction:</strong> Let x ∈ (A∪B) ∩ (A∪C). Then x ∈ A∪B and x ∈ A∪C.' },
              { n: '←', t: 'If x ∈ A → done. If x ∉ A, then x must be in B (from A∪B) AND in C (from A∪C) → x ∈ B∩C → x ∈ A∪(B∩C)' }
            ]},
            { final: '∴ A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C) ✓ (Proven by element argument)' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Prove: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)', a: 'Similar element argument: If x ∈ A∩(B∪C), then x ∈ A and (x ∈ B or x ∈ C).<br>Case 1: x ∈ B → x ∈ A∩B → x ∈ (A∩B)∪(A∩C)<br>Case 2: x ∈ C → x ∈ A∩C → x ∈ (A∩B)∪(A∩C)<br>Backward: if x ∈ (A∩B)∪(A∩C) → x ∈ A∩B or x ∈ A∩C → x ∈ A and x ∈ B∪C ✓' },
            { q: 'P2. Using A={1,2,3}, B={2,3,4}, C={3,4,5}, verify: A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)', a: 'B ∩ C = {3,4}<br>LHS: A ∪ {3,4} = {1,2,3,4}<br>A ∪ B = {1,2,3,4},  A ∪ C = {1,2,3,4,5}<br>RHS: {1,2,3,4} ∩ {1,2,3,4,5} = {1,2,3,4} ✓ Both sides equal.' }
          ]}
        ]
      },
      {
        id: 'q2',
        title: 'Verify De Morgan\'s Law: (A ∩ B)\' = A\' ∪ B\'',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: '<strong>De Morgan\'s Laws</strong> are two rules: (A∩B)\' = A\'∪B\' and (A∪B)\' = A\'∩B\'. They tell us how complements work with ∩ and ∪. Think of it like English: "NOT (raining AND cold)" = "NOT raining OR NOT cold".' },
          { type: 'ans', label: '✅ Verification with example', content: [
            { text: 'Let U={1,2,3,4,5}, A={1,2,3}, B={2,3,4}' },
            { steps: [
              { n: '1', t: 'A ∩ B = {2,3}' },
              { n: '2', t: '(A ∩ B)\' = U − {2,3} = <strong>{1,4,5}</strong> ← Left side' },
              { n: '3', t: 'A\' = U − A = {4,5} and B\' = U − B = {1,5}' },
              { n: '4', t: 'A\' ∪ B\' = {4,5} ∪ {1,5} = <strong>{1,4,5}</strong> ← Right side' }
            ]},
            { final: 'Both sides = {1,4,5} ✓ De Morgan\'s Law verified!' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Verify the other De Morgan\'s Law: (A ∪ B)\' = A\' ∩ B\' using U={1..6}, A={1,2,3}, B={3,4,5}', a: 'A ∪ B = {1,2,3,4,5} → (A∪B)\' = {6} ← LHS<br>A\' = {4,5,6}, B\' = {1,2,6}<br>A\' ∩ B\' = {6} ✓ Both sides equal.' },
            { q: 'P2. If U={a,b,c,d,e}, A={a,c,e}, B={b,c,d}, find (A∩B)\' and A\'∪B\' and verify they\'re equal.', a: 'A∩B = {c} → (A∩B)\' = {a,b,d,e}<br>A\' = {b,d}, B\' = {a,e}<br>A\'∪B\' = {a,b,d,e} ✓ Verified.' }
          ]}
        ]
      },
      {
        id: 'q3',
        title: 'A={1,2,3,4}, B={3,4,5,6}: Find A∪B, A∩B, A−B',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: '<strong>Union (∪)</strong> = all elements in EITHER set. <strong>Intersection (∩)</strong> = elements in BOTH sets. <strong>Difference (A−B)</strong> = elements in A but NOT in B. These are the 3 most fundamental set operations.' },
          { type: 'ans', label: '✅ Answer', content: [
            { steps: [
              { n: '∪', t: 'A ∪ B = all elements from both = {1,2,3,4,5,6}' },
              { n: '∩', t: 'A ∩ B = only what\'s in both = {3,4}' },
              { n: '−', t: 'A − B = in A but remove what\'s in B = {1,2,3,4} − {3,4} = {1,2}' }
            ]},
            { final: 'A∪B = {1,2,3,4,5,6} | A∩B = {3,4} | A−B = {1,2}' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. A={2,4,6,8}, B={4,8,10,12}. Find A∪B, A∩B, B−A.', a: 'A∪B = {2,4,6,8,10,12}<br>A∩B = {4,8}<br>B−A = {10,12}' },
            { q: 'P2. A={a,b,c,d}, B={c,d,e,f}. Find A∩B and A−B.', a: 'A∩B = {c,d}<br>A−B = {a,b}' }
          ]}
        ]
      },
      {
        id: 'q4',
        title: 'Find the Power Set of A = {2, 4, 6}',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'The <strong>Power Set P(A)</strong> is the set of ALL possible subsets of A, including the empty set and A itself. If |A| = n elements, then |P(A)| = 2ⁿ subsets. Here n=3, so we get 2³ = 8 subsets.' },
          { type: 'ans', label: '✅ Answer', content: [
            { text: 'A = {2, 4, 6} → n = 3 → 2³ = 8 subsets' },
            { final: 'P(A) = { ∅, {2}, {4}, {6}, {2,4}, {2,6}, {4,6}, {2,4,6} }' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Find the power set of B = {a, b}. How many subsets?', a: 'n=2 → 2² = 4 subsets<br>P(B) = {∅, {a}, {b}, {a,b}}' },
            { q: 'P2. If |P(A)| = 16, how many elements does A have?', a: '2ⁿ = 16 → n = 4. So A has 4 elements.' }
          ]}
        ]
      },
      {
        id: 'q5',
        title: 'Find A ∩ (B ∪ C) with A={1,2,3}, B={2,3,4}, C={3,4,5}',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'This is a nested set operation. Always work <strong>inside out</strong>: compute B∪C first, then intersect the result with A. Like maths with brackets: do brackets first!' },
          { type: 'ans', label: '✅ Answer', content: [
            { steps: [
              { n: '1', t: 'B ∪ C = {2,3,4} ∪ {3,4,5} = {2,3,4,5}' },
              { n: '2', t: 'A ∩ (B∪C) = {1,2,3} ∩ {2,3,4,5} = {2,3}' }
            ]},
            { final: 'A ∩ (B ∪ C) = {2, 3}' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. A={1,2,3,4}, B={3,5}, C={1,4,5}. Find A ∩ (B ∪ C).', a: 'B∪C={1,3,4,5}. A∩{1,3,4,5}={1,3,4}' },
            { q: 'P2. A={x,y,z}, B={y,z,w}, C={z,w,v}. Find (A∪B) ∩ C.', a: 'A∪B={x,y,z,w}. {x,y,z,w}∩{z,w,v}={z,w}' }
          ]}
        ]
      },
      {
        id: 'q6',
        title: 'Check A ⊆ B: A={2,3}, B={1,2,3,4,5}',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'A is a <strong>subset</strong> of B (written A ⊆ B) if every element of A is also in B. Check each element of A one by one.' },
          { type: 'ans', label: '✅ Answer', content: [
            { steps: [
              { n: '✓', t: 'Is 2 ∈ B? Yes (B = {1,2,3,4,5})' },
              { n: '✓', t: 'Is 3 ∈ B? Yes' }
            ]},
            { final: 'A ⊆ B ✓ Yes, A is a subset of B.' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Is A={1,5,7} ⊆ B={1,2,3,4,5,6}?', a: '7 ∉ B. So A ⊄ B. No, A is NOT a subset of B.' },
            { q: 'P2. Is ∅ a subset of every set? Explain.', a: 'Yes. The empty set is a subset of every set because there are no elements in ∅ to violate the condition. This is called a "vacuous truth."' }
          ]}
        ]
      },
      {
        id: 'q7',
        title: 'Find A × B (Cartesian Product): A={1,2}, B={x,y}',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'The <strong>Cartesian Product</strong> A×B is every possible ordered pair (a, b) where a comes from A and b comes from B. If |A|=m and |B|=n, then |A×B| = m×n pairs.' },
          { type: 'ans', label: '✅ Answer', content: [
            { text: 'Pair every element of A with every element of B:' },
            { final: 'A × B = {(1,x), (1,y), (2,x), (2,y)}' },
            { text: 'Note: 2 × 2 = 4 ordered pairs total' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. A={a,b,c}, B={1,2}. Find A×B and |A×B|.', a: 'A×B = {(a,1),(a,2),(b,1),(b,2),(c,1),(c,2)}. |A×B| = 6' },
            { q: 'P2. Is A×B equal to B×A? Show with A={1,2}, B={p,q}.', a: 'A×B={(1,p),(1,q),(2,p),(2,q)}<br>B×A={(p,1),(p,2),(q,1),(q,2)}<br>They are NOT equal (order matters in pairs). A×B ≠ B×A in general.' }
          ]}
        ]
      },
      {
        id: 'q8',
        title: 'If n(A)=6, n(B)=5, n(A∩B)=2, find n(A∪B)',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'This uses the <strong>Inclusion-Exclusion Principle</strong>: when you add two sets together, you count the overlap twice, so you must subtract it once. Formula: n(A∪B) = n(A) + n(B) − n(A∩B)' },
          { type: 'ans', label: '✅ Answer', content: [
            { formula: 'n(A∪B) = n(A) + n(B) − n(A∩B)' },
            { final: 'n(A∪B) = 6 + 5 − 2 = 9' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. n(A)=10, n(B)=8, n(A∪B)=15. Find n(A∩B).', a: 'n(A∩B) = n(A)+n(B)−n(A∪B) = 10+8−15 = 3' },
            { q: 'P2. In a class of 30 students, 18 study Maths, 15 study English, 7 study both. How many study at least one?', a: 'n(M∪E) = 18+15−7 = 26 students study at least one subject.' }
          ]}
        ]
      },
      {
        id: 'q9',
        title: 'Prove A ∪ A = A (Idempotent Law)',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'This is the <strong>Idempotent Law</strong>. It means unioning a set with itself gives back the same set. No new elements can come from A that weren\'t already in A.' },
          { type: 'ans', label: '✅ Proof', content: [
            { steps: [
              { n: '→', t: 'Suppose x ∈ A ∪ A. By definition of union, x ∈ A or x ∈ A. Either way, x ∈ A.' },
              { n: '←', t: 'Suppose x ∈ A. Then x ∈ A ∪ A (since x is in at least one of the A\'s).' }
            ]},
            { final: '∴ A ∪ A = A ✓' },
            { text: 'Also note: A ∩ A = A works the same way.' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Prove A ∩ A = A.', a: 'If x ∈ A∩A → x ∈ A and x ∈ A → x ∈ A. Conversely x ∈ A → x ∈ A and x ∈ A → x ∈ A∩A. ∴ A∩A = A ✓' },
            { q: 'P2. Prove A ∪ ∅ = A.', a: 'If x ∈ A∪∅ → x ∈ A or x ∈ ∅. Since ∅ has no elements, x must be in A. Conversely x ∈ A → x ∈ A∪∅. ∴ A∪∅ = A ✓' }
          ]}
        ]
      },
      {
        id: 'q10',
        title: 'Find Complement A\' given U={1..8}, A={1,3,5,7}',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'The <strong>complement A\'</strong> (also written Aᶜ or Ā) = U − A. It\'s all elements in the universal set U that are NOT in A. Think of it as "everything else."' },
          { type: 'ans', label: '✅ Answer', content: [
            { text: 'U = {1,2,3,4,5,6,7,8}, A = {1,3,5,7}' },
            { final: 'A\' = U − A = {2, 4, 6, 8}' },
            { text: '(Everything in U that is NOT in A)' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. U={a,b,c,d,e,f}, A={b,d,f}. Find A\'.', a: 'A\' = {a,c,e}' },
            { q: 'P2. Prove (A\')\' = A.', a: 'A\' = U−A. (A\')\' = U−(U−A) = A. Since removing from U the things NOT in A leaves exactly A. ✓' }
          ]}
        ]
      }
    ]
  },

  // ── PROBABILITY ──
  {
    id: 'prob', cls: 's-prob',
    title: 'Probability',
    sub: 'Questions 11 to 20 · Classical Probability, Coins, Dice, Cards',
    gradient: 'linear-gradient(90deg, var(--accent2), var(--accent4))',
    questions: [
      {
        id: 'q11',
        title: 'Find probability of selecting a red ball from {3 red, 2 blue, 5 green}',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'Basic probability formula: <strong>P(event) = favourable outcomes divided by total outcomes</strong>. Count what you want, divide by everything possible.' },
          { type: 'ans', label: '✅ Answer', content: [
            { text: 'Total balls = 3+2+5 = 10. Red balls = 3.' },
            { formula: 'P(red) = 3/10 = 0.3' },
            { final: 'P(red) = 3/10 = 30%' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Bag contains 4 red, 6 blue, 2 yellow. P(blue)?', a: 'Total=12. P(blue)=6/12=1/2=0.5' },
            { q: 'P2. P(not red) from original bag of 10 (3 red)?', a: 'P(not red) = 1 − P(red) = 1 − 3/10 = 7/10' }
          ]}
        ]
      },
      {
        id: 'q12',
        title: 'Find P(sum = 9) when rolling two dice',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'Two dice have 6×6=36 equally likely outcomes. List all pairs (die1, die2) that add up to 9, then divide by 36.' },
          { type: 'ans', label: '✅ Answer', content: [
            { text: 'Pairs summing to 9: (3,6),(4,5),(5,4),(6,3) = 4 pairs' },
            { formula: 'P(sum=9) = 4/36 = 1/9' },
            { final: 'P(sum = 9) = 4/36 = 1/9 ≈ 0.111' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Find P(sum = 7) with two dice.', a: 'Pairs: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 pairs. P = 6/36 = 1/6' },
            { q: 'P2. Find P(sum is even) with two dice.', a: 'Even sums: both even (3×3=9 ways) + both odd (3×3=9 ways) = 18 ways. P = 18/36 = 1/2' }
          ]}
        ]
      },
      {
        id: 'q13',
        title: 'Probability of exactly 1 head when tossing 3 coins',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: '3 coins gives 2³=8 equally likely outcomes. List all outcomes with exactly 1 head (H), count them, divide by 8. Each outcome is a sequence like HHT.' },
          { type: 'ans', label: '✅ Answer', content: [
            { text: 'All outcomes: HHH, HHT, HTH, HTT, THH, THT, TTH, TTT (8 total)<br>Exactly 1 head: HTT, THT, TTH = 3 outcomes' },
            { final: 'P(exactly 1 head) = 3/8' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. P(exactly 2 heads) from 3 coins?', a: 'HHT, HTH, THH = 3 outcomes. P = 3/8' },
            { q: 'P2. P(at least 2 heads) from 3 coins?', a: '2 heads (3) + 3 heads (1) = 4 outcomes. P = 4/8 = 1/2' }
          ]}
        ]
      },
      {
        id: 'q14',
        title: 'Probability of drawing a Queen from a standard deck',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'A standard deck has 52 cards. There are 4 Queens (one per suit: ♠♥♦♣). Probability = 4/52.' },
          { type: 'ans', label: '✅ Answer', content: [
            { final: 'P(Queen) = 4/52 = 1/13 ≈ 0.077 (about 7.7%)' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. P(drawing a Heart) from a deck?', a: '13 hearts in 52 cards. P = 13/52 = 1/4' },
            { q: 'P2. P(drawing a face card (Jack, Queen, or King))?', a: '3 face cards × 4 suits = 12 cards. P = 12/52 = 3/13' }
          ]}
        ]
      },
      {
        id: 'q15',
        title: 'Probability of selecting an orange from {4 apples, 3 oranges, 2 grapes}',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'Same as Q11: count the specific fruit, divide by total count.' },
          { type: 'ans', label: '✅ Answer', content: [
            { text: 'Total = 4+3+2 = 9' },
            { final: 'P(orange) = 3/9 = 1/3 ≈ 0.333' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. 5 mangoes, 4 bananas, 1 pineapple. P(banana)?', a: 'Total=10. P(banana)=4/10=2/5' },
            { q: 'P2. From the same fruit basket (4 apples, 3 oranges, 2 grapes), P(not grape)?', a: 'P(not grape) = 1 − 2/9 = 7/9' }
          ]}
        ]
      },
      {
        id: 'q16',
        title: 'P(all balls blue) when drawing 2 from {4 blue, 3 red} without replacement',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: '"Without replacement" means after you pick the first ball, you don\'t put it back. So the second pick changes. Use combinations: C(4,2)/C(7,2): ways to choose 2 blue from 4, divided by ways to choose any 2 from 7.' },
          { type: 'ans', label: '✅ Answer', content: [
            { formula: 'P = C(4,2) / C(7,2) = 6/21 = 2/7' },
            { steps: [
              { n: '1', t: 'C(4,2) = 4!/(2!2!) = 6 (ways to choose 2 blue)' },
              { n: '2', t: 'C(7,2) = 7!/(2!5!) = 21 (ways to choose any 2)' }
            ]},
            { final: 'P(both blue) = 6/21 = 2/7 ≈ 0.286' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Bag has 3 red, 2 blue. Draw 2 without replacement. P(both red)?', a: 'C(3,2)/C(5,2) = 3/10' },
            { q: 'P2. Using the sequential method: P(1st blue) × P(2nd blue | 1st was blue), verify Q16.', a: 'P(1st blue) = 4/7. P(2nd blue | 1st blue) = 3/6 = 1/2. Joint = 4/7 × 1/2 = 4/14 = 2/7 ✓' }
          ]}
        ]
      },
      {
        id: 'q17',
        title: 'Define Conditional Probability',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: '<strong>Conditional probability</strong> P(A|B) means "the probability of A given that B has already happened." You restrict your sample space to only outcomes where B occurred.' },
          { type: 'ans', label: '✅ Definition and Formula', content: [
            { formula: 'P(A|B) = P(A ∩ B) / P(B),  where P(B) ≠ 0' },
            { text: 'Example: A card is drawn. Given it\'s a Heart, P(it\'s an Ace)?<br>P(Ace|Heart) = P(Ace AND Heart) / P(Heart) = (1/52)/(13/52) = 1/13' },
            { final: 'Conditional probability restricts the sample space to only events where B occurred.' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. P(A)=0.4, P(B)=0.5, P(A∩B)=0.2. Find P(A|B).', a: 'P(A|B) = 0.2/0.5 = 0.4' },
            { q: 'P2. Roll a die. Given it shows even, what is P(it\'s a 4)?', a: 'Even numbers: {2,4,6}. Only one is 4. P(4|even) = 1/3' }
          ]}
        ]
      },
      {
        id: 'q18',
        title: 'P(at least one tail) when tossing 2 coins',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: '"At least one" is easiest using the <strong>complement rule</strong>: P(at least 1 tail) = 1 − P(no tails at all) = 1 − P(all heads).' },
          { type: 'ans', label: '✅ Answer', content: [
            { text: 'Outcomes: HH, HT, TH, TT (4 total)<br>P(no tail) = P(HH) = 1/4' },
            { final: 'P(at least 1 tail) = 1 − 1/4 = 3/4' },
            { text: 'Or count directly: HT, TH, TT = 3 outcomes → 3/4 ✓' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Toss 3 coins. P(at least one head)?', a: 'P(no head) = P(TTT) = 1/8. P(at least one head) = 1−1/8 = 7/8' },
            { q: 'P2. Toss 2 coins. P(exactly one tail)?', a: 'HT and TH = 2 outcomes. P = 2/4 = 1/2' }
          ]}
        ]
      },
      {
        id: 'q19',
        title: 'P(selecting a boy) from a class of 12 boys and 8 girls',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'Straightforward classical probability. Favourable = boys, total = all students.' },
          { type: 'ans', label: '✅ Answer', content: [
            { text: 'Total = 12 + 8 = 20' },
            { final: 'P(boy) = 12/20 = 3/5 = 0.6 = 60%' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Class: 15 boys, 10 girls. Two students selected. P(both girls)?', a: 'P = C(10,2)/C(25,2) = 45/300 = 3/20' },
            { q: 'P2. From Q19\'s class (12 boys, 8 girls), 2 selected. P(one boy, one girl)?', a: 'C(12,1)×C(8,1)/C(20,2) = 96/190 = 48/95' }
          ]}
        ]
      },
      {
        id: 'q20',
        title: 'Construct Probability Distribution for X = number of heads in 3 coin tosses',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'A <strong>probability distribution</strong> is a table listing all possible values of a random variable X and their probabilities. All probabilities must sum to 1.' },
          { type: 'ans', label: '✅ Answer', content: [
            { text: 'X can be 0, 1, 2, or 3 heads. Total outcomes = 8.' },
            { steps: [
              { n: 'X=0', t: 'TTT → 1 outcome → P = 1/8' },
              { n: 'X=1', t: 'HTT,THT,TTH → 3 outcomes → P = 3/8' },
              { n: 'X=2', t: 'HHT,HTH,THH → 3 outcomes → P = 3/8' },
              { n: 'X=3', t: 'HHH → 1 outcome → P = 1/8' }
            ]},
            { final: 'X:  0    1    2    3\nP: 1/8  3/8  3/8  1/8\nSum = 1/8+3/8+3/8+1/8 = 8/8 = 1 ✓' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Construct the probability distribution for X = number of tails in 2 coin tosses.', a: 'X=0 (HH): P=1/4 | X=1 (HT,TH): P=2/4=1/2 | X=2 (TT): P=1/4. Sum=1 ✓' },
            { q: 'P2. What is E(X) (expected value) for the distribution in Q20?', a: 'E(X) = 0×(1/8)+1×(3/8)+2×(3/8)+3×(1/8) = 0+3/8+6/8+3/8 = 12/8 = 1.5 heads on average.' }
          ]}
        ]
      }
    ]
  },

  // ── MATRIX ──
  {
    id: 'matrix', cls: 's-matrix',
    title: 'Matrix',
    sub: 'Questions 21 to 30 · Transpose, Determinant, Multiplication, Identity',
    gradient: 'linear-gradient(90deg, var(--accent5), var(--accent1))',
    questions: [
      {
        id: 'q21',
        title: 'Find the Transpose of matrix A = [[1,2],[3,4],[5,6]]',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'The <strong>transpose Aᵀ</strong> flips a matrix: rows become columns and columns become rows. A 3×2 matrix becomes a 2×3 matrix.' },
          { type: 'ans', label: '✅ Answer', content: [
            { text: 'A = [ [1,2], [3,4], [5,6] ]  (3×2 matrix)' },
            { final: 'Aᵀ = [ [1,3,5], [2,4,6] ]  (2×3 matrix)\nRow 1 of A becomes Column 1 of Aᵀ\nRow 2 of A becomes Column 2 of Aᵀ' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Find transpose of A = [[1,4],[2,5],[3,6]].', a: 'Aᵀ = [[1,2,3],[4,5,6]]' },
            { q: 'P2. Find transpose of A = [[7,0,−1],[2,3,5]]. What is the size of Aᵀ?', a: 'Aᵀ = [[7,2],[0,3],[−1,5]]. Size: 3×2.' }
          ]}
        ]
      },
      {
        id: 'q22',
        title: 'Find the size (order) of a matrix',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'The <strong>size (order)</strong> of a matrix is written as m×n where m = number of rows, n = number of columns. Always rows first, columns second.' },
          { type: 'ans', label: '✅ Answer', content: [
            { text: 'Example: A = [[1,2,3],[4,5,6]] → 2 rows, 3 columns' },
            { final: 'Size = 2×3 (read: "2 by 3")' },
            { text: 'Key: m×n matrix has m×n total elements = 2×3 = 6 elements here.' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Matrix B has 4 rows and 2 columns. What is its order and how many elements?', a: 'Order = 4×2. Elements = 4×2 = 8.' },
            { q: 'P2. Can you add a 2×3 matrix to a 3×2 matrix? Why or why not?', a: 'No. Matrix addition requires both matrices to have the SAME order. 2×3 ≠ 3×2.' }
          ]}
        ]
      },
      {
        id: 'q23',
        title: 'Add two matrices A = [[1,2],[3,4]] and B = [[5,6],[7,8]]',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'Matrix addition is simple: <strong>add the corresponding elements</strong> at the same position. Both matrices must have the same size.' },
          { type: 'ans', label: '✅ Answer', content: [
            { steps: [
              { n: '[1,1]', t: '1+5 = 6' }, { n: '[1,2]', t: '2+6 = 8' },
              { n: '[2,1]', t: '3+7 = 10' }, { n: '[2,2]', t: '4+8 = 12' }
            ]},
            { final: 'A + B = [[6, 8], [10, 12]]' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. A=[[2,0],[1,3]], B=[[−1,4],[2,−2]]. Find A+B.', a: 'A+B = [[1,4],[3,1]]' },
            { q: 'P2. A=[[5,2],[1,0]], B=[[3,1],[4,7]]. Find 2A + B.', a: '2A=[[10,4],[2,0]]. 2A+B=[[13,5],[6,7]]' }
          ]}
        ]
      },
      {
        id: 'q24',
        title: 'Multiply matrices A = [[1,2],[3,4]] and B = [[2,0],[1,3]]',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'Matrix multiplication: each element (i,j) of the result = <strong>dot product of row i of A with column j of B</strong>. For a 2×2: multiply row-by-column and add the products.' },
          { type: 'ans', label: '✅ Answer', content: [
            { steps: [
              { n: '[1,1]', t: 'Row1 of A · Col1 of B = 1×2 + 2×1 = 4' },
              { n: '[1,2]', t: 'Row1 of A · Col2 of B = 1×0 + 2×3 = 6' },
              { n: '[2,1]', t: 'Row2 of A · Col1 of B = 3×2 + 4×1 = 10' },
              { n: '[2,2]', t: 'Row2 of A · Col2 of B = 3×0 + 4×3 = 12' }
            ]},
            { final: 'A × B = [[4, 6], [10, 12]]' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Multiply A=[[1,0],[2,3]] × B=[[4,1],[0,2]].', a: '[1,1]:4, [1,2]:1, [2,1]:8, [2,2]:8. AB=[[4,1],[8,8]]' },
            { q: 'P2. For what sizes of matrices A and B can we compute A×B?', a: 'If A is m×n, B must be n×p. The number of columns of A must equal the number of rows of B. Result is m×p.' }
          ]}
        ]
      },
      {
        id: 'q25',
        title: 'Find element at position (1,2) of matrix A = [[3,7,1],[2,5,8]]',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'Element (i,j) means row i, column j. (1,2) = row 1, column 2. Indexing starts from 1.' },
          { type: 'ans', label: '✅ Answer', content: [
            { text: 'Row 1 = [3, 7, 1]. Column 2 of Row 1 = 7' },
            { final: 'a₁₂ = 7' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. A = [[1,2,3],[4,5,6],[7,8,9]]. Find a₂₃ and a₃₁.', a: 'a₂₃ = row 2, col 3 = 6. a₃₁ = row 3, col 1 = 7.' },
            { q: 'P2. A 3×4 matrix. What is the largest valid row index and column index?', a: '3 rows → max row index = 3. 4 columns → max column index = 4. So element a₃₄ is the last one.' }
          ]}
        ]
      },
      {
        id: 'q26',
        title: 'Solve matrix equation: 2X + A = B, find X',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'Treat the matrix equation like a regular algebraic equation. Isolate X using matrix addition/subtraction rules. Each element of the result matrix is solved individually.' },
          { type: 'ans', label: '✅ Answer', content: [
            { text: 'Let A=[[1,2],[3,4]], B=[[7,8],[9,10]]' },
            { formula: '2X = B − A → X = (B − A)/2' },
            { steps: [
              { n: '1', t: 'B − A = [[6,6],[6,6]]' },
              { n: '2', t: 'X = (1/2)×[[6,6],[6,6]] = [[3,3],[3,3]]' }
            ]},
            { final: 'X = [[3, 3], [3, 3]]' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. 3X = [[9,6],[3,12]]. Find X.', a: 'X = [[3,2],[1,4]]' },
            { q: 'P2. X + [[1,0],[0,1]] = [[4,3],[2,5]]. Find X.', a: 'X = [[4,3],[2,5]] − [[1,0],[0,1]] = [[3,3],[2,4]]' }
          ]}
        ]
      },
      {
        id: 'q27',
        title: 'Write the Identity Matrix I₂ and I₃',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'The <strong>identity matrix I</strong> is a square matrix with 1s on the main diagonal (top-left to bottom-right) and 0s everywhere else. It\'s the matrix equivalent of the number 1: A×I = A.' },
          { type: 'ans', label: '✅ Answer', content: [
            { final: 'I₂ = [[1,0],[0,1]]   (2×2 identity)\n\nI₃ = [[1,0,0],[0,1,0],[0,0,1]]   (3×3 identity)\n\nProperty: A × I = I × A = A' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Verify that A×I = A for A=[[3,1],[2,4]].', a: 'A×I₂: [1,1]=3×1+1×0=3, [1,2]=3×0+1×1=1, [2,1]=2, [2,2]=4. Result=[[3,1],[2,4]]=A ✓' },
            { q: 'P2. What is the determinant of any identity matrix Iₙ?', a: 'det(Iₙ) = 1, for any n. The determinant of the identity matrix is always 1.' }
          ]}
        ]
      },
      {
        id: 'q28',
        title: 'Find the Determinant of A = [[3,8],[4,6]]',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'For a 2×2 matrix [[a,b],[c,d]], the <strong>determinant</strong> = ad − bc. Cross multiply: top-left × bottom-right MINUS top-right × bottom-left.' },
          { type: 'ans', label: '✅ Answer', content: [
            { formula: 'det(A) = (3×6) − (8×4) = 18 − 32 = −14' },
            { final: 'det(A) = |A| = −14' },
            { text: 'Note: If det = 0, the matrix has NO inverse (singular).' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Find det of [[5,3],[2,4]].', a: 'det = 5×4 − 3×2 = 20 − 6 = 14' },
            { q: 'P2. Find det of [[2,6],[1,3]]. Is this matrix invertible?', a: 'det = 2×3 − 6×1 = 6−6 = 0. det=0 → NOT invertible (singular matrix).' }
          ]}
        ]
      },
      {
        id: 'q29',
        title: 'Find A² for A = [[1,2],[3,4]]',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'A² means A×A: multiply the matrix by itself. Use the same row×column method from Q24.' },
          { type: 'ans', label: '✅ Answer', content: [
            { steps: [
              { n: '[1,1]', t: '1×1 + 2×3 = 1+6 = 7' }, { n: '[1,2]', t: '1×2 + 2×4 = 2+8 = 10' },
              { n: '[2,1]', t: '3×1 + 4×3 = 3+12 = 15' }, { n: '[2,2]', t: '3×2 + 4×4 = 6+16 = 22' }
            ]},
            { final: 'A² = [[7, 10], [15, 22]]' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Find A² for A=[[2,1],[0,3]].', a: '[1,1]:4+0=4, [1,2]:2+3=5, [2,1]:0+0=0, [2,2]:0+9=9. A²=[[4,5],[0,9]]' },
            { q: 'P2. I² = ? (I is identity). What does this tell you about I?', a: 'I² = I×I = I. The identity matrix squared equals itself, just like 1²=1 in regular arithmetic.' }
          ]}
        ]
      },
      {
        id: 'q30',
        title: 'Check if A = [[2,3],[3,2]] is a symmetric matrix',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'A matrix is <strong>symmetric</strong> if A = Aᵀ, meaning it equals its own transpose. Visually: it\'s a mirror reflection across the main diagonal.' },
          { type: 'ans', label: '✅ Answer', content: [
            { text: 'A = [[2,3],[3,2]]\nAᵀ = [[2,3],[3,2]] (transpose = swap rows/columns)' },
            { final: 'A = Aᵀ → YES, A is symmetric ✓\nKey check: element (1,2) = element (2,1) = 3 ✓' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Is A=[[1,2],[4,1]] symmetric?', a: 'a₁₂=2, a₂₁=4. Since 2≠4, A is NOT symmetric.' },
            { q: 'P2. Show that for any A, the matrix A + Aᵀ is always symmetric.', a: 'Let B = A+Aᵀ. Then Bᵀ = (A+Aᵀ)ᵀ = Aᵀ+(Aᵀ)ᵀ = Aᵀ+A = B. So B=Bᵀ → symmetric. ✓' }
          ]}
        ]
      }
    ]
  },

  // ── ALGORITHMS ──
  {
    id: 'algo', cls: 's-algo',
    title: 'Algorithms',
    sub: 'Questions 31 to 40 · Bubble Sort and Binary Search',
    gradient: 'linear-gradient(90deg, var(--accent3), var(--accent5))',
    questions: [
      {
        id: 'q31',
        title: 'Sort 6,2,9,1,5 using Bubble Sort; then Binary Search for 5',
        blocks: [
          { type: 'exp', label: '💡 How Bubble Sort works', html: '<strong>Bubble Sort</strong> repeatedly compares adjacent elements and swaps them if they\'re in wrong order. Each full pass "bubbles" the largest unsorted element to its correct position. Repeat for n-1 passes.' },
          { type: 'ans', label: '✅ Bubble Sort Steps', content: [
            { text: 'Start: 6,2,9,1,5' },
            { steps: [
              { n: 'Pass 1', t: 'Compare pairs L to R: swap(6,2)→2,6,9,1,5 | no swap(6,9) | swap(9,1)→2,6,1,9,5 | swap(9,5)→ 2,6,1,5,9' },
              { n: 'Pass 2', t: '2,6,1,5,9: no swap | swap(6,1)→2,1,6,5,9 | swap(6,5)→2,1,5,6,9 | 9 fixed' },
              { n: 'Pass 3', t: '2,1,5,6,9: swap(2,1)→1,2,5,6,9 | rest sorted' },
              { n: 'Pass 4', t: '1,2,5,6,9: no swaps → SORTED' }
            ]},
            { final: 'Sorted: 1, 2, 5, 6, 9' }
          ]},
          { type: 'ans', label: '🔍 Binary Search for 5', content: [
            { text: 'Array: [1, 2, 5, 6, 9], Search: 5' },
            { steps: [
              { n: 'Step 1', t: 'Low=0, High=4, Mid=2 → arr[2]=5 → FOUND!' }
            ]},
            { final: '5 found at index 2 ✓ (1 step!)' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Sort 5,3,1,4,2 using bubble sort. Show Pass 1 step by step.', a: 'Pass 1: swap(5,3)→3,5,1,4,2 | swap(5,1)→3,1,5,4,2 | swap(5,4)→3,1,4,5,2 | swap(5,2)→3,1,4,2,5. After pass 1: 3,1,4,2,5' },
            { q: 'P2. Binary search on [1,3,5,7,9,11]. Search for 7. Show all steps.', a: 'Low=0,High=5,Mid=2→arr[2]=5&lt;7→Low=3. Mid=4→arr[4]=9&gt;7→High=3. Mid=3→arr[3]=7=FOUND at index 3.' }
          ]}
        ]
      },
      {
        id: 'q32',
        title: 'Sort 10,7,3,8,4; then search for 8',
        blocks: [
          { type: 'ans', label: '✅ Answer', content: [
            { steps: [
              { n: 'Pass1', t: '10,7,3,8,4: swap(10,7)→7,10,3,8,4 | swap(10,3)→7,3,10,8,4 | swap(10,8)→7,3,8,10,4 | swap(10,4)→7,3,8,4,10' },
              { n: 'Pass2', t: '7,3,8,4,10: swap(7,3)→3,7,8,4,10 | no | swap(8,4)→3,7,4,8,10' },
              { n: 'Pass3', t: '3,7,4,8,10: swap(7,4)→3,4,7,8,10 → SORTED' }
            ]},
            { final: 'Sorted: 3,4,7,8,10 | Binary Search for 8: Mid=7, 7&lt;8 → Low=3, Mid=8 FOUND at index 3 ✓' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. After sorting 10,7,3,8,4 → how many comparisons did bubble sort make in Pass 1?', a: '4 comparisons in pass 1 (n-1 = 5-1 = 4 for 5 elements).' },
            { q: 'P2. What is the maximum number of comparisons binary search needs for a list of 8 elements?', a: 'log₂(8) = 3. Max 3 comparisons (binary search is O(log n)).' }
          ]}
        ]
      },
      {
        id: 'q33',
        title: 'Sort 15,12,9,6,3; then search for 12',
        blocks: [
          { type: 'ans', label: '✅ Answer', content: [
            { text: 'Note: This is already in descending order, so Bubble Sort must reverse it entirely.' },
            { final: 'Sorted: 3,6,9,12,15 | Binary Search for 12: Low=0,High=4,Mid=2→arr[2]=9&lt;12→Low=3. Mid=3→arr[3]=12 FOUND ✓' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Why is a reverse-sorted list the WORST case for bubble sort?', a: 'Every pair needs swapping. Total comparisons = n(n-1)/2. For 5 elements = 10 comparisons. Maximum possible.' },
            { q: 'P2. Sort [5,5,3,3,1] using bubble sort. What happens with equal elements?', a: 'Equal elements are not swapped (stable sort). Result: 1,3,3,5,5. Bubble sort is stable.' }
          ]}
        ]
      },
      {
        id: 'q34',
        title: 'Sort 8,4,7,2,6: show 2 passes; then search for 7',
        blocks: [
          { type: 'ans', label: '✅ Answer', content: [
            { steps: [
              { n: 'Pass1', t: '8,4,7,2,6 → swap(8,4)→4,8,7,2,6 | swap(8,7)→4,7,8,2,6 | swap(8,2)→4,7,2,8,6 | swap(8,6)→4,7,2,6,8 ← End Pass 1: 8 is in place' },
              { n: 'Pass2', t: '4,7,2,6,8 → no swap(4,7) | swap(7,2)→4,2,7,6,8 | swap(7,6)→4,2,6,7,8 ← End Pass 2' }
            ]},
            { final: 'After 2 passes: 4,2,6,7,8 (not fully sorted yet, but 2 passes shown)\nFully sorted: 2,4,6,7,8 | Search 7: found at index 3 ✓' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. After Pass 2 on 8,4,7,2,6, which elements are guaranteed to be in correct final position?', a: 'After k passes, the last k elements are in final position. After 2 passes: 7 and 8 are in correct positions.' },
            { q: 'P2. How many total passes does bubble sort need for n=5 in worst case?', a: 'n-1 = 4 passes maximum for 5 elements.' }
          ]}
        ]
      },
      {
        id: 'q35',
        title: 'Sort 20,10,30,5,15; then search for 15',
        blocks: [
          { type: 'ans', label: '✅ Answer', content: [
            { final: 'Sorted: 5,10,15,20,30\nBinary Search for 15: Low=0,High=4,Mid=2→arr[2]=15 FOUND at index 2 in 1 step! ✓' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. What is the time complexity of Bubble Sort?', a: 'O(n²) in worst and average case. O(n) best case (already sorted). Space: O(1).' },
            { q: 'P2. What is the time complexity of Binary Search?', a: 'O(log₂ n). For 1000 elements, max ~10 comparisons. Much faster than linear search O(n).' }
          ]}
        ]
      },
      {
        id: 'q36',
        title: 'Sort 11,3,14,7,9; then search for 3',
        blocks: [
          { type: 'ans', label: '✅ Answer', content: [
            { final: 'Sorted: 3,7,9,11,14\nBinary Search for 3: Low=0,High=4,Mid=2→arr[2]=9&gt;3→High=1. Mid=0→arr[0]=3 FOUND at index 0 ✓' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Binary search on [3,7,9,11,14] for value 1 (not in list). What happens?', a: 'Mid=2→9&gt;1→High=1. Mid=0→3&gt;1→High=−1. Low&gt;High → NOT FOUND.' },
            { q: 'P2. Why is searching for the smallest element (3) potentially slower in binary search than finding the middle element?', a: 'Binary search starts at the middle. If the target is at an edge (like index 0), it takes more halving steps to reach it, potentially up to log₂(n) steps.' }
          ]}
        ]
      },
      {
        id: 'q37',
        title: 'Sort 25,20,15,10,5; then search for 20',
        blocks: [
          { type: 'ans', label: '✅ Answer', content: [
            { final: 'Sorted: 5,10,15,20,25\nBinary Search for 20: Low=0,High=4,Mid=2→arr[2]=15&lt;20→Low=3. Mid=3→arr[3]=20 FOUND ✓' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. The input 25,20,15,10,5 is already sorted in descending order. Does bubble sort still work?', a: 'Yes, bubble sort always produces ascending order regardless of input. But descending input is the worst case and requires maximum swaps.' },
            { q: 'P2. How many total swaps does bubble sort make on [25,20,15,10,5]?', a: 'n(n-1)/2 = 5×4/2 = 10 swaps (maximum, worst case for descending input).' }
          ]}
        ]
      },
      {
        id: 'q38',
        title: 'Sort 9,1,8,2,7; then check if 6 exists',
        blocks: [
          { type: 'ans', label: '✅ Answer', content: [
            { final: 'Sorted: 1,2,7,8,9\nBinary Search for 6: Mid=2→arr[2]=7&gt;6→High=1. Mid=0→1&lt;6→Low=1. Mid=1→arr[1]=2&lt;6→Low=2. Low&gt;High → 6 NOT FOUND ✗' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. What condition ends a binary search with "not found"?', a: 'When Low &gt; High. The search range becomes empty, meaning the element is not in the array.' },
            { q: 'P2. Sort 9,1,8,2,7: how many passes of bubble sort until no swaps occur?', a: 'Needs approximately 3 to 4 passes. The final sorted result is 1,2,7,8,9.' }
          ]}
        ]
      },
      {
        id: 'q39',
        title: 'Sort 4,2,6,1,3; then search for 4',
        blocks: [
          { type: 'ans', label: '✅ Answer', content: [
            { steps: [
              { n: 'Pass1', t: 'swap(4,2)→2,4,6,1,3 | no(4,6) | swap(6,1)→2,4,1,6,3 | swap(6,3)→2,4,1,3,6' },
              { n: 'Pass2', t: 'no(2,4) | swap(4,1)→2,1,4,3,6 | swap(4,3)→2,1,3,4,6' },
              { n: 'Pass3', t: 'swap(2,1)→1,2,3,4,6 | rest sorted' }
            ]},
            { final: 'Sorted: 1,2,3,4,6 | Search 4: Mid=2→arr[2]=3&lt;4→Low=3. Mid=3→arr[3]=4 FOUND ✓' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. After sorting [4,2,6,1,3]→[1,2,3,4,6], use binary search to find 6.', a: 'Low=0,High=4,Mid=2→3&lt;6→Low=3. Mid=3→4&lt;6→Low=4. Mid=4→arr[4]=6 FOUND at index 4.' },
            { q: 'P2. On [1,2,3,4,6], how many steps to find 1 using binary search?', a: 'Mid=2→3&gt;1→High=1. Mid=0→1=1 FOUND in 2 steps.' }
          ]}
        ]
      },
      {
        id: 'q40',
        title: 'Explain WHY Binary Search needs sorted data',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'This is a conceptual question. You need to explain the fundamental logic of binary search and why it breaks on unsorted data.' },
          { type: 'ans', label: '✅ Answer', content: [
            { steps: [
              { n: 'Logic', t: 'Binary search works by comparing the target with the MIDDLE element, then eliminating HALF the remaining elements.' },
              { n: 'Why', t: 'This elimination only works if data is sorted. If arr[mid] &lt; target, we KNOW all elements to the LEFT are also smaller. This assumption fails in unsorted data.' },
              { n: 'Example', t: 'Unsorted [3,9,1,7,5], search for 7: Mid=1(value=9), 9&gt;7 → go left → [3] → not found! But 7 IS in the array at index 3.' }
            ]},
            { final: 'Conclusion: Sorted order lets binary search make guaranteed decisions. Without it, eliminating halves is invalid and gives wrong answers. That is why we sort with Bubble Sort first.' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. What is the difference between linear search and binary search?', a: 'Linear search: checks every element one by one. Works on unsorted data. O(n). Binary search: cuts search in half each step. Requires sorted data. O(log n). Binary is faster for large data.' },
            { q: 'P2. Array has 32 elements. Max comparisons needed by binary search?', a: 'log₂(32) = 5. Maximum 5 comparisons. Linear search would need up to 32.' }
          ]}
        ]
      }
    ]
  },

  // ── RECURRENCE ──
  {
    id: 'rec', cls: 's-rec',
    title: 'Recurrence and Sequences',
    sub: 'Questions 41 to 45 · Recurrence Relations, Fibonacci',
    gradient: 'linear-gradient(90deg, var(--accent4), var(--accent2))',
    questions: [
      {
        id: 'q41',
        title: 'Find a₁, a₂, a₃ for: aₙ = 2aₙ₋₁ + 1, a₀ = 1',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'A <strong>recurrence relation</strong> defines each term based on previous terms. Given the initial value (a₀) and the rule, you compute terms one by one by substitution.' },
          { type: 'ans', label: '✅ Answer', content: [
            { text: 'Rule: aₙ = 2aₙ₋₁ + 1, starting with a₀ = 1' },
            { steps: [
              { n: 'a₁', t: 'a₁ = 2a₀ + 1 = 2(1) + 1 = 3' },
              { n: 'a₂', t: 'a₂ = 2a₁ + 1 = 2(3) + 1 = 7' },
              { n: 'a₃', t: 'a₃ = 2a₂ + 1 = 2(7) + 1 = 15' }
            ]},
            { final: 'a₁=3, a₂=7, a₃=15 (pattern: 2ⁿ⁺¹ − 1)' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. aₙ = aₙ₋₁ + 3, a₀ = 2. Find a₁, a₂, a₃.', a: 'a₁=5, a₂=8, a₃=11 (arithmetic sequence, +3 each time)' },
            { q: 'P2. aₙ = 3aₙ₋₁, a₁ = 2. Find a₂, a₃, a₄.', a: 'a₂=6, a₃=18, a₄=54 (geometric sequence, ×3 each time)' }
          ]}
        ]
      },
      {
        id: 'q42',
        title: 'Solve: aₙ = 3aₙ₋₁ with a₁ = 2',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'This is a <strong>geometric recurrence</strong>. Each term is 3 times the previous. The solution (closed form) is aₙ = a₁ × 3^(n-1). We "solve" by finding the general formula.' },
          { type: 'ans', label: '✅ Answer', content: [
            { steps: [
              { n: 'a₁', t: 'a₁ = 2' }, { n: 'a₂', t: 'a₂ = 3×2 = 6' },
              { n: 'a₃', t: 'a₃ = 3×6 = 18' }, { n: 'a₄', t: 'a₄ = 3×18 = 54' }
            ]},
            { formula: 'Closed form: aₙ = 2 × 3^(n-1)' },
            { final: 'Verify: a₁ = 2×3⁰ = 2 ✓, a₂ = 2×3¹ = 6 ✓' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. aₙ = 2aₙ₋₁, a₁ = 5. Find closed form and a₅.', a: 'aₙ = 5×2^(n-1). a₅ = 5×2⁴ = 5×16 = 80.' },
            { q: 'P2. aₙ = 4aₙ₋₁, a₀ = 1. What is a₄?', a: 'aₙ = 4ⁿ. a₄ = 4⁴ = 256.' }
          ]}
        ]
      },
      {
        id: 'q43',
        title: 'Check if aₙ = 2ⁿ satisfies the recurrence aₙ = 2aₙ₋₁',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'Substitute aₙ = 2ⁿ into the recurrence relation and check if both sides are equal. This is called <strong>verifying a solution</strong>.' },
          { type: 'ans', label: '✅ Answer', content: [
            { text: 'If aₙ = 2ⁿ, then aₙ₋₁ = 2^(n-1)' },
            { steps: [
              { n: 'RHS', t: '2aₙ₋₁ = 2 × 2^(n-1) = 2^(1+(n-1)) = 2ⁿ' },
              { n: 'LHS', t: 'aₙ = 2ⁿ' },
              { n: 'Check', t: 'LHS = RHS = 2ⁿ ✓' }
            ]},
            { final: 'Yes, aₙ = 2ⁿ satisfies aₙ = 2aₙ₋₁ ✓' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Does aₙ = 3ⁿ satisfy aₙ = 3aₙ₋₁?', a: '3aₙ₋₁ = 3×3^(n-1) = 3ⁿ = aₙ. Yes ✓' },
            { q: 'P2. Does aₙ = n² satisfy aₙ = 2aₙ₋₁?', a: '2aₙ₋₁ = 2(n-1)². Does n² = 2(n-1)²? For n=2: 4 = 2×1 = 2. 4≠2. NO, n² does not satisfy it.' }
          ]}
        ]
      },
      {
        id: 'q44',
        title: 'Fibonacci Numbers: write the recurrence and first 8 terms',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'The <strong>Fibonacci sequence</strong> is the most famous recurrence: each term is the sum of the two before it. F(1)=1, F(2)=1, F(n)=F(n-1)+F(n-2).' },
          { type: 'ans', label: '✅ Answer', content: [
            { formula: 'F(n) = F(n-1) + F(n-2), F(1)=1, F(2)=1' },
            { steps: [
              { n: 'F1,F2', t: '1, 1' }, { n: 'F3', t: '1+1=2' }, { n: 'F4', t: '1+2=3' },
              { n: 'F5', t: '2+3=5' }, { n: 'F6', t: '3+5=8' }, { n: 'F7', t: '5+8=13' }, { n: 'F8', t: '8+13=21' }
            ]},
            { final: 'Fibonacci: 1, 1, 2, 3, 5, 8, 13, 21, ...' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Find F(10) in the Fibonacci sequence.', a: 'Continuing: F9=21+13=34. F10=34+21=55.' },
            { q: 'P2. A sequence: 2,2,4,6,10,16,... What is the recurrence and the next term?', a: 'Same Fibonacci rule but starting with a₁=a₂=2. Next = 10+16=26. Recurrence: aₙ=aₙ₋₁+aₙ₋₂.' }
          ]}
        ]
      },
      {
        id: 'q45',
        title: 'Write a recurrence relation for: 3, 6, 12, 24, 48, ...',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'Look at the pattern between consecutive terms. What operation takes you from one term to the next? Here each term is <strong>doubled</strong>. Write this as a rule.' },
          { type: 'ans', label: '✅ Answer', content: [
            { text: '3 → 6 (×2) → 12 (×2) → 24 (×2) → 48 (×2)' },
            { formula: 'aₙ = 2aₙ₋₁,  a₁ = 3' },
            { final: 'Recurrence: aₙ = 2aₙ₋₁ with initial condition a₁ = 3.\nClosed form: aₙ = 3 × 2^(n-1)' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Write a recurrence for: 5, 10, 15, 20, 25, ...', a: 'aₙ = aₙ₋₁ + 5, a₁ = 5. (Arithmetic, adding 5 each time)' },
            { q: 'P2. Write recurrence for: 1, 3, 9, 27, 81, ...', a: 'aₙ = 3aₙ₋₁, a₁ = 1. (Geometric, ×3 each time). Closed form: aₙ = 3^(n-1).' }
          ]}
        ]
      }
    ]
  },

  // ── COMBINATORICS ──
  {
    id: 'comb', cls: 's-comb',
    title: 'Combinatorics',
    sub: 'Questions 46 to 50 · Combinations, Permutations, Pigeonhole',
    gradient: 'linear-gradient(90deg, #d06af7, var(--accent1))',
    questions: [
      {
        id: 'q46',
        title: 'Find ⁶C₃ (Choose 3 from 6)',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: '<strong>Combinations C(n,r)</strong> count how many ways to choose r items from n when ORDER DOESN\'T MATTER. Formula: C(n,r) = n! / (r! × (n-r)!). Think: choosing a team where positions don\'t matter.' },
          { type: 'ans', label: '✅ Answer', content: [
            { formula: 'C(6,3) = 6! / (3! × 3!) = 720 / (6 × 6) = 720/36' },
            { steps: [
              { n: 'num', t: '6! = 720, 3! = 6' },
              { n: 'calc', t: '720 / (6 × 6) = 720/36 = 20' }
            ]},
            { final: '⁶C₃ = 20' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Find C(8,2).', a: 'C(8,2) = 8!/(2!×6!) = (8×7)/2 = 56/2 = 28' },
            { q: 'P2. From 10 questions, choose any 6 to answer. How many ways?', a: 'C(10,6) = C(10,4) = (10×9×8×7)/(4×3×2×1) = 5040/24 = 210 ways.' }
          ]}
        ]
      },
      {
        id: 'q47',
        title: 'Find ⁵P₂ (Permute 2 from 5)',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: '<strong>Permutations P(n,r)</strong> count arrangements where ORDER DOES MATTER. Formula: P(n,r) = n! / (n-r)!. Think: 1st place, 2nd place: order matters in races!' },
          { type: 'ans', label: '✅ Answer', content: [
            { formula: 'P(5,2) = 5! / (5-2)! = 5! / 3! = 120/6 = 20' },
            { text: 'Shortcut: P(5,2) = 5 × 4 = 20 (pick 1st from 5, pick 2nd from remaining 4)' },
            { final: '⁵P₂ = 20' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Find P(7,3).', a: 'P(7,3) = 7×6×5 = 210' },
            { q: 'P2. Why is P(n,r) ≥ C(n,r) always? Show with n=5, r=2.', a: 'P(5,2)=20, C(5,2)=10. P = C × r! (permutations count each combination in all its orderings). P ≥ C since r! ≥ 1.' }
          ]}
        ]
      },
      {
        id: 'q48',
        title: 'Choose 4 students from 12 to form a committee',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'A committee has no specific roles, just membership. Order doesn\'t matter. Use <strong>combinations C(12,4)</strong>.' },
          { type: 'ans', label: '✅ Answer', content: [
            { formula: 'C(12,4) = 12! / (4! × 8!)' },
            { steps: [
              { n: 'num', t: '= (12 × 11 × 10 × 9) / (4 × 3 × 2 × 1)' },
              { n: 'calc', t: '= 11880 / 24 = 495' }
            ]},
            { final: 'C(12,4) = 495 ways to choose 4 from 12' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. Choose 3 from 10 students for a group. How many ways?', a: 'C(10,3) = (10×9×8)/(3×2×1) = 720/6 = 120 ways.' },
            { q: 'P2. Elect a President, VP, and Secretary from 12 students (3 specific roles). How many ways?', a: 'Now ORDER MATTERS (different roles). Use P(12,3) = 12×11×10 = 1320 ways.' }
          ]}
        ]
      },
      {
        id: 'q49',
        title: 'In how many ways can 5 people be arranged in a row?',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'Arranging ALL n people in a row = n! (n factorial). Order matters here: A,B,C is different from B,A,C. This is a full permutation.' },
          { type: 'ans', label: '✅ Answer', content: [
            { text: '5 people in a row: first slot has 5 choices, second has 4, third 3, fourth 2, fifth 1.' },
            { formula: '5! = 5 × 4 × 3 × 2 × 1 = 120' },
            { final: '120 ways to arrange 5 people in a row' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. How many ways to arrange 7 books on a shelf?', a: '7! = 7×6×5×4×3×2×1 = 5040 ways.' },
            { q: 'P2. 5 people sit in a circle. How many arrangements? (Circular permutation)', a: 'Circular permutation = (n-1)! = (5-1)! = 4! = 24. (Fix one person, arrange the rest.)' }
          ]}
        ]
      },
      {
        id: 'q50',
        title: 'Pigeonhole Principle: prove 2 people share a birth month in any group of 13',
        blocks: [
          { type: 'exp', label: '💡 What this is asking', html: 'The <strong>Pigeonhole Principle</strong>: if you put n+1 pigeons into n holes, at least one hole has 2+ pigeons. Here: 12 months = 12 "holes", 13 people = 13 "pigeons". One month must have 2 people!' },
          { type: 'ans', label: '✅ Answer', content: [
            { steps: [
              { n: 'Setup', t: 'There are 12 possible birth months (Jan to Dec). These are our "pigeonholes".' },
              { n: 'Proof', t: 'With 13 people ("pigeons") and only 12 months ("holes"), by the pigeonhole principle at least one month must contain ⌈13/12⌉ = 2 people.' },
              { n: 'Logic', t: 'If every month had at most 1 person → max 12 people. But we have 13, a contradiction!' }
            ]},
            { formula: 'General: n+1 items into n categories → at least one category has ≥2 items' },
            { final: '∴ In ANY group of 13 people, at least 2 share a birth month. ✓ (QED)' }
          ]},
          { type: 'pq', items: [
            { q: 'P1. How many students must be in a class to guarantee 2 share the same day of the week as their birthday?', a: '7 days of week → need 7+1 = 8 students to guarantee 2 share the same day.' },
            { q: 'P2. A drawer has red, blue, green socks (3 colors). How many socks must you pick (in the dark) to guarantee a matching pair?', a: '3 colors = 3 pigeonholes. You need 3+1 = 4 socks to guarantee a matching pair. (First 3 could be 1 of each color.)' }
          ]}
        ]
      }
    ]
  }
];


// ==========================================================
// RENDERING ENGINE
// ==========================================================

function renderContentItem(c) {
  let h = '';
  if (c.text !== undefined) h += c.text;
  if (c.formula !== undefined) h += `<div class="formula">${c.formula}</div>`;
  if (c.steps) {
    h += '<ol class="steps">';
    c.steps.forEach(s => { h += `<li data-n="${s.n}">${s.t}</li>`; });
    h += '</ol>';
  }
  if (c.final !== undefined) h += `<div class="ans-final">${c.final}</div>`;
  return h;
}

function renderBlock(b) {
  if (b.type === 'exp') {
    return `<div class="block"><div class="block-label">${b.label}</div><div class="explanation">${b.html}</div></div>`;
  }
  if (b.type === 'ans') {
    let inner = '';
    b.content.forEach(c => { inner += renderContentItem(c); });
    return `<div class="block"><div class="block-label">${b.label}</div><div class="answer-box">${inner}</div></div>`;
  }
  if (b.type === 'pq') {
    let items = '';
    b.items.forEach(item => {
      items += `<div class="pq-item"><div class="pq-q">${item.q}</div><button class="show-pq-btn" onclick="revealAns(this)">Show Answer ▾</button><div class="pq-ans-hidden"><div class="pq-a">${item.a}</div></div></div>`;
    });
    return `<div class="block"><div class="block-label">🎯 Practice Questions</div><div class="pq-box"><div class="pq-header">📝 Try These</div>${items}</div></div>`;
  }
  return '';
}

function renderQuestion(q) {
  let blocks = '';
  q.blocks.forEach(b => { blocks += renderBlock(b); });
  return `<div class="q-card" id="${q.id}"><div class="q-header" onclick="toggle('${q.id}')"><span class="q-num">${q.id.replace('q','Q')}</span><span class="q-title">${q.title}</span><span class="q-toggle">▾</span></div><div class="q-body">${blocks}</div></div>`;
}

function renderAll() {
  const main = document.querySelector('.main');
  SECTIONS.forEach((sec, i) => {
    let qs = '';
    sec.questions.forEach(q => { qs += renderQuestion(q); });
    const gradientStyle = sec.gradient ? ` background: ${sec.gradient};` : '';
    main.innerHTML += `<div class="section ${sec.cls}${i === 0 ? ' active' : ''}" id="sec-${sec.id}"><div class="section-header"><div><div class="section-title">${sec.title}</div><div class="section-sub">${sec.sub}</div></div></div><div class="progress-bar"><div class="progress-fill" style="width:100%;${gradientStyle}"></div></div>${qs}</div>`;
  });
}


// ==========================================================
// INTERACTION
// ==========================================================

function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('sec-' + id).classList.add('active');
  event.target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggle(id) {
  document.getElementById(id).classList.toggle('open');
}

function revealAns(btn) {
  const ans = btn.nextElementSibling;
  ans.classList.toggle('revealed');
  btn.textContent = ans.classList.contains('revealed') ? 'Hide Answer ▴' : 'Show Answer ▾';
}


// ==========================================================
// INIT
// ==========================================================
document.addEventListener('DOMContentLoaded', renderAll);
