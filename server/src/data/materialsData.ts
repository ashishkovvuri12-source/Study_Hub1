export interface IQuestion {
  questionNumber: number;
  text: string;
  isImportant: boolean;
}

export interface IChapter {
  chapterNumber: number;
  title: string;
  video: string;
  content: string;
  questions: IQuestion[];
}

export interface ISubjectMaterial {
  subjectId: string;
  name: string;
  icon: string;
  order: number;
  tagline: string;
  description: string;
  tags: string[];
  chapters: IChapter[];
}

export const initialMaterials: ISubjectMaterial[] = [
  {
    "subjectId": "maths",
    "name": "Mathematics",
    "icon": "📐",
    "order": 1,
    "tagline": "Subject 01 · Mathematics",
    "description": "Click any chapter title to open notes. Questions marked ⭐ are important for exams.",
    "tags": [
      "Algebra",
      "Calculus",
      "Matrices",
      "Probability"
    ],
    "chapters": [
      {
        "chapterNumber": 1,
        "title": "Number System & Basic Algebra",
        "video": "https://www.youtube.com/watch?v=kRj8M_qgQeA",
        "content": "<h3>Number System</h3>\n<p>Numbers are classified into different types:</p>\n<ul>\n  <li><strong>Natural Numbers (N):</strong> 1, 2, 3, 4, … (counting numbers)</li>\n  <li><strong>Whole Numbers (W):</strong> 0, 1, 2, 3, … (natural + zero)</li>\n  <li><strong>Integers (Z):</strong> …−2, −1, 0, 1, 2, … (positive + negative)</li>\n  <li><strong>Rational Numbers (Q):</strong> Numbers of the form p/q where p, q are integers and q ≠ 0. Example: 1/2, −3/4, 0.5</li>\n  <li><strong>Irrational Numbers:</strong> Cannot be expressed as p/q. Example: √2, π, e</li>\n  <li><strong>Real Numbers (R):</strong> All rational + irrational numbers combined</li>\n</ul>\n<div class=\"callout callout-key\">💡 <div>Every integer is a rational number (e.g., 5 = 5/1), but not every rational number is an integer.</div></div>\n\n<h3>Quadratic Equations</h3>\n<p>A quadratic equation has the form: <code>ax² + bx + c = 0</code></p>\n<ul>\n  <li><strong>Factorization:</strong> Find two numbers whose product = ac and sum = b</li>\n  <li><strong>Quadratic Formula:</strong> x = (−b ± √(b²−4ac)) / 2a</li>\n  <li><strong>Discriminant (D) = b²−4ac:</strong></li>\n</ul>\n<ul>\n  <li>D &gt; 0 → Two distinct real roots</li>\n  <li>D = 0 → One repeated real root</li>\n  <li>D &lt; 0 → No real roots (complex roots)</li>\n</ul>\n<div class=\"callout callout-tip\">✅ <div>Vieta's Formulas: Sum of roots = −b/a &nbsp;|&nbsp; Product of roots = c/a</div></div>\n\n<h3>Solved Example</h3>\n<p>Solve: x² − 7x + 12 = 0</p>\n<pre><code>Find two numbers: product = 12, sum = 7 → (3 and 4)\nx² − 3x − 4x + 12 = 0\nx(x−3) − 4(x−3) = 0\n(x−3)(x−4) = 0\n∴ x = 3  or  x = 4</code></pre>\n<div class=\"callout callout-warn\">⚠️ <div>Always check: substitute roots back into the original equation to verify.</div></div>",
        "questions": [
          {
            "questionNumber": 1,
            "text": "Define rational and irrational numbers. Give two examples of each.",
            "isImportant": true
          },
          {
            "questionNumber": 2,
            "text": "Simplify: <code>(3x² + 5x − 2) ÷ (x + 2)</code> using polynomial long division.",
            "isImportant": false
          },
          {
            "questionNumber": 3,
            "text": "Solve the quadratic equation: <code>x² − 7x + 12 = 0</code> using factorization method.",
            "isImportant": true
          },
          {
            "questionNumber": 4,
            "text": "Find the roots of <code>2x² + 3x − 5 = 0</code> using the quadratic formula.",
            "isImportant": false
          },
          {
            "questionNumber": 5,
            "text": "What is the relationship between the roots and coefficients of a quadratic equation? State Vieta's formulas.",
            "isImportant": false
          }
        ]
      },
      {
        "chapterNumber": 2,
        "title": "Matrices & Determinants",
        "video": "https://www.youtube.com/watch?v=xyAuNHPsq-g",
        "content": "<h3>What is a Matrix?</h3>\n<p>A matrix is a rectangular arrangement of numbers in rows and columns, enclosed in square brackets.</p>\n<p>A matrix with m rows and n columns is called an <strong>m × n matrix</strong>.</p>\n\n<h3>Types of Matrices</h3>\n<ul>\n  <li><strong>Row Matrix:</strong> Only 1 row → [1, 2, 3] (1×3)</li>\n  <li><strong>Column Matrix:</strong> Only 1 column</li>\n  <li><strong>Square Matrix:</strong> Rows = Columns (e.g., 2×2, 3×3)</li>\n  <li><strong>Identity Matrix (I):</strong> Diagonal elements = 1, rest = 0</li>\n  <li><strong>Zero Matrix:</strong> All elements = 0</li>\n  <li><strong>Diagonal Matrix:</strong> Non-diagonal elements = 0</li>\n</ul>\n\n<h3>Matrix Operations</h3>\n<ul>\n  <li><strong>Addition:</strong> Add corresponding elements (matrices must be same size)</li>\n  <li><strong>Multiplication:</strong> A(m×n) × B(n×p) = C(m×p) — columns of A must equal rows of B</li>\n  <li><strong>Transpose (Aᵀ):</strong> Swap rows and columns</li>\n</ul>\n<div class=\"callout callout-warn\">⚠️ <div>Matrix multiplication is NOT commutative: A×B ≠ B×A in general.</div></div>\n\n<h3>Determinant of 2×2 Matrix</h3>\n<pre><code>If A = [[a, b], [c, d]]\ndet(A) = |A| = ad − bc</code></pre>\n\n<h3>Inverse of a Matrix</h3>\n<p>A⁻¹ = (1/|A|) × adj(A)</p>\n<p>Matrix inverse exists only when det(A) ≠ 0 (called Non-Singular matrix).</p>\n<div class=\"callout callout-key\">💡 <div>Verification: A × A⁻¹ = I (Identity Matrix)</div></div>\n\n<h3>Cramer's Rule</h3>\n<p>For system: ax + by = e, cx + dy = f</p>\n<pre><code>D  = ad − bc\nDx = ed − bf\nDy = af − ec\nx = Dx/D,  y = Dy/D</code></pre>",
        "questions": [
          {
            "questionNumber": 1,
            "text": "Define a matrix. Explain types: Row, Column, Square, Identity, Zero, and Diagonal matrices with examples.",
            "isImportant": true
          },
          {
            "questionNumber": 2,
            "text": "If A = [[1,2],[3,4]] and B = [[5,6],[7,8]], find A + B and A × B.",
            "isImportant": true
          },
          {
            "questionNumber": 3,
            "text": "Find the determinant of a 3×3 matrix using cofactor expansion.",
            "isImportant": false
          },
          {
            "questionNumber": 4,
            "text": "Find the transpose and inverse of matrix A = [[2,1],[5,3]]. Verify A × A⁻¹ = I.",
            "isImportant": false
          },
          {
            "questionNumber": 5,
            "text": "Solve using Cramer's Rule: 2x + y = 5, 3x − 2y = 4.",
            "isImportant": false
          }
        ]
      },
      {
        "chapterNumber": 3,
        "title": "Differential Calculus",
        "video": "https://www.youtube.com/watch?v=WUvTyaaNkzM",
        "content": "<h3>What is a Derivative?</h3>\n<p>The derivative of a function f(x) measures the rate of change of f with respect to x. Geometrically, it is the slope of the tangent line to the curve at a point.</p>\n<pre><code>f'(x) = lim(h→0) [f(x+h) − f(x)] / h</code></pre>\n\n<h3>Basic Differentiation Rules</h3>\n<ul>\n  <li><strong>Power Rule:</strong> d/dx(xⁿ) = n·xⁿ⁻¹</li>\n  <li><strong>Constant Rule:</strong> d/dx(c) = 0</li>\n  <li><strong>Sum Rule:</strong> d/dx(f+g) = f' + g'</li>\n  <li><strong>Product Rule:</strong> d/dx(f·g) = f'g + fg'</li>\n  <li><strong>Quotient Rule:</strong> d/dx(f/g) = (f'g − fg') / g²</li>\n  <li><strong>Chain Rule:</strong> d/dx[f(g(x))] = f'(g(x)) · g'(x)</li>\n</ul>\n\n<h3>Standard Derivatives</h3>\n<ul>\n  <li>d/dx(sin x) = cos x</li>\n  <li>d/dx(cos x) = −sin x</li>\n  <li>d/dx(eˣ) = eˣ</li>\n  <li>d/dx(ln x) = 1/x</li>\n</ul>\n<div class=\"callout callout-tip\">✅ <div>Chain Rule example: d/dx[(3x²+1)⁵] = 5(3x²+1)⁴ · 6x = 30x(3x²+1)⁴</div></div>\n\n<h3>Maxima & Minima</h3>\n<ul>\n  <li>Find f'(x) = 0 → these are critical points</li>\n  <li>If f''(x) &lt; 0 at critical point → Local Maximum</li>\n  <li>If f''(x) &gt; 0 at critical point → Local Minimum</li>\n</ul>",
        "questions": [
          {
            "questionNumber": 1,
            "text": "State the definition of a derivative. What does it geometrically represent?",
            "isImportant": true
          },
          {
            "questionNumber": 2,
            "text": "Differentiate: <code>f(x) = 3x³ − 5x² + 2x − 7</code>. State which rule you use at each step.",
            "isImportant": true
          },
          {
            "questionNumber": 3,
            "text": "Find dy/dx if <code>y = sin(x) · eˣ</code> using the Product Rule.",
            "isImportant": false
          },
          {
            "questionNumber": 4,
            "text": "Apply the Chain Rule to find the derivative of <code>y = (3x² + 1)⁵</code>.",
            "isImportant": false
          },
          {
            "questionNumber": 5,
            "text": "Find the local maxima and minima of <code>f(x) = x³ − 3x² + 4</code>.",
            "isImportant": false
          }
        ]
      },
      {
        "chapterNumber": 4,
        "title": "Integral Calculus",
        "video": "https://www.youtube.com/watch?v=rfG8ce4nNh0",
        "content": "<h3>What is Integration?</h3>\n<p>Integration is the reverse process of differentiation. It is used to find areas under curves, total quantities, and accumulation of values.</p>\n<ul>\n  <li><strong>Indefinite Integral:</strong> ∫f(x)dx = F(x) + C (C = constant of integration)</li>\n  <li><strong>Definite Integral:</strong> ∫ₐᵇ f(x)dx = F(b) − F(a) (gives a numerical value)</li>\n</ul>\n\n<h3>Standard Integration Formulas</h3>\n<ul>\n  <li>∫xⁿ dx = xⁿ⁺¹/(n+1) + C &nbsp;(n ≠ −1)</li>\n  <li>∫eˣ dx = eˣ + C</li>\n  <li>∫sin x dx = −cos x + C</li>\n  <li>∫cos x dx = sin x + C</li>\n  <li>∫(1/x) dx = ln|x| + C</li>\n</ul>\n\n<h3>Substitution Method</h3>\n<p>Used when the integrand has a composite function:</p>\n<pre><code>Example: ∫sin(3x) dx\nLet u = 3x → du = 3dx → dx = du/3\n∫sin(u) · du/3 = −cos(u)/3 + C = −cos(3x)/3 + C</code></pre>\n\n<h3>Fundamental Theorem of Calculus</h3>\n<p>If F is an antiderivative of f, then:</p>\n<pre><code>∫ₐᵇ f(x)dx = F(b) − F(a)</code></pre>\n<div class=\"callout callout-key\">💡 <div>This theorem connects differentiation and integration — they are inverse operations.</div></div>",
        "questions": [
          {
            "questionNumber": 1,
            "text": "Explain the difference between Definite and Indefinite integrals with examples.",
            "isImportant": true
          },
          {
            "questionNumber": 2,
            "text": "Evaluate: <code>∫(4x³ − 6x + 2) dx</code>.",
            "isImportant": false
          },
          {
            "questionNumber": 3,
            "text": "Evaluate: <code>∫₀² (x² + 1) dx</code>.",
            "isImportant": true
          },
          {
            "questionNumber": 4,
            "text": "Use substitution method to evaluate: <code>∫ sin(3x) dx</code>.",
            "isImportant": false
          },
          {
            "questionNumber": 5,
            "text": "State and explain the Fundamental Theorem of Calculus.",
            "isImportant": false
          }
        ]
      },
      {
        "chapterNumber": 5,
        "title": "Probability & Statistics",
        "video": "https://www.youtube.com/watch?v=MRpz3q-m43U",
        "content": "<h3>Basic Probability</h3>\n<p>Probability measures the likelihood of an event occurring:</p>\n<pre><code>P(A) = Number of favourable outcomes / Total outcomes\nP(A) always satisfies: 0 ≤ P(A) ≤ 1</code></pre>\n<ul>\n  <li><strong>Certain event:</strong> P(A) = 1</li>\n  <li><strong>Impossible event:</strong> P(A) = 0</li>\n  <li><strong>Complementary:</strong> P(A') = 1 − P(A)</li>\n</ul>\n\n<h3>Addition Theorem</h3>\n<p>P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</p>\n<p>If A and B are mutually exclusive: P(A ∪ B) = P(A) + P(B)</p>\n\n<h3>Conditional Probability & Multiplication Theorem</h3>\n<p>P(A|B) = P(A ∩ B) / P(B) → Probability of A given B has occurred</p>\n<p>P(A ∩ B) = P(A) · P(B|A)</p>\n<div class=\"callout callout-tip\">✅ <div>Independent events: P(A ∩ B) = P(A) · P(B)</div></div>\n\n<h3>Measures of Central Tendency</h3>\n<ul>\n  <li><strong>Mean:</strong> Sum of all values / Number of values</li>\n  <li><strong>Median:</strong> Middle value when arranged in order</li>\n  <li><strong>Mode:</strong> Most frequently occurring value</li>\n</ul>\n\n<h3>Standard Deviation & Variance</h3>\n<pre><code>Variance  = Σ(xᵢ − x̄)² / n\nStd Dev   = √Variance</code></pre>\n<div class=\"callout callout-warn\">⚠️ <div>Low SD → data is clustered near the mean. High SD → data is spread out.</div></div>",
        "questions": [
          {
            "questionNumber": 1,
            "text": "Define Probability. State and explain the Addition and Multiplication theorems.",
            "isImportant": true
          },
          {
            "questionNumber": 2,
            "text": "A bag has 5 red and 3 blue balls. Find the probability of drawing a red ball at random.",
            "isImportant": true
          },
          {
            "questionNumber": 3,
            "text": "Define Mean, Median, and Mode. Calculate all three for: 4, 7, 2, 9, 7, 3, 7.",
            "isImportant": false
          },
          {
            "questionNumber": 4,
            "text": "Explain Conditional Probability with a real-life example. State Bayes' theorem.",
            "isImportant": false
          },
          {
            "questionNumber": 5,
            "text": "Compute standard deviation and variance for: 10, 12, 14, 16, 18.",
            "isImportant": false
          }
        ]
      },
      {
        "chapterNumber": 6,
        "title": "Set Theory & Logic",
        "video": "https://www.youtube.com/watch?v=tyDKRwZvkjQ",
        "content": "<h3>What is a Set?</h3>\n<p>A set is a well-defined collection of distinct objects, called elements.</p>\n<ul>\n  <li>A = {1, 2, 3, 4} — Roster/Tabular form</li>\n  <li>A = {x : x is a natural number less than 5} — Set-builder form</li>\n</ul>\n\n<h3>Set Operations</h3>\n<ul>\n  <li><strong>Union (A ∪ B):</strong> All elements in A or B (or both)</li>\n  <li><strong>Intersection (A ∩ B):</strong> Elements common to both A and B</li>\n  <li><strong>Difference (A − B):</strong> Elements in A but not in B</li>\n  <li><strong>Complement (A'):</strong> Elements in Universal set but not in A</li>\n  <li><strong>Cartesian Product (A × B):</strong> All ordered pairs (a, b) where a ∈ A, b ∈ B</li>\n</ul>\n\n<h3>De Morgan's Laws</h3>\n<pre><code>(A ∪ B)' = A' ∩ B'\n(A ∩ B)' = A' ∪ B'</code></pre>\n\n<h3>Logic — Truth Tables</h3>\n<ul>\n  <li><strong>AND (∧):</strong> True only when both inputs are True</li>\n  <li><strong>OR (∨):</strong> True when at least one input is True</li>\n  <li><strong>NOT (¬):</strong> Inverts the truth value</li>\n  <li><strong>NAND:</strong> NOT AND — False only when both are True</li>\n  <li><strong>NOR:</strong> NOT OR — True only when both are False</li>\n</ul>\n<div class=\"callout callout-key\">💡 <div>Functions: A relation where every element of domain maps to exactly one element of range. Types: One-one (Injective), Onto (Surjective), One-one and Onto (Bijective).</div></div>",
        "questions": [
          {
            "questionNumber": 1,
            "text": "Define a Set. Explain Union, Intersection, and Complement with a Venn diagram.",
            "isImportant": true
          },
          {
            "questionNumber": 2,
            "text": "State De Morgan's Laws and verify them with an example.",
            "isImportant": false
          },
          {
            "questionNumber": 3,
            "text": "What is a Truth Table? Construct truth tables for AND, OR, NOT, NAND and NOR operations.",
            "isImportant": true
          },
          {
            "questionNumber": 4,
            "text": "Differentiate between a relation and a function. Give examples of bijective, injective, and surjective functions.",
            "isImportant": false
          },
          {
            "questionNumber": 5,
            "text": "If A = {1,2,3} and B = {3,4,5}, find A ∪ B, A ∩ B, A − B, and A × B.",
            "isImportant": false
          }
        ]
      }
    ]
  },
  {
    "subjectId": "ml",
    "name": "Machine Learning",
    "icon": "🤖",
    "order": 2,
    "tagline": "Subject 02 · Machine Learning",
    "description": "Click any chapter title to open notes. Questions marked ⭐ are important for exams.",
    "tags": [
      "Regression",
      "Classification",
      "Clustering",
      "Neural Nets"
    ],
    "chapters": [
      {
        "chapterNumber": 1,
        "title": "Introduction to Machine Learning",
        "video": "https://www.youtube.com/watch?v=ukzFI9rgwfU",
        "content": "<h3>What is Machine Learning?</h3>\n<p>Machine Learning is a subset of Artificial Intelligence that enables systems to <strong>learn from data</strong> and improve their performance without being explicitly programmed.</p>\n\n<h3>Types of Machine Learning</h3>\n<ul>\n  <li><strong>Supervised Learning:</strong> Model is trained on labeled data (input-output pairs). Example: spam detection, house price prediction.</li>\n  <li><strong>Unsupervised Learning:</strong> Model finds patterns in unlabeled data. Example: customer segmentation, topic modeling.</li>\n  <li><strong>Reinforcement Learning:</strong> An agent learns by interacting with an environment and receiving rewards/penalties. Example: game playing AI, robots.</li>\n</ul>\n<div class=\"callout callout-key\">💡 <div>Supervised = has labels | Unsupervised = no labels | Reinforcement = reward-based</div></div>\n\n<h3>Key Terminology</h3>\n<ul>\n  <li><strong>Feature:</strong> Input variable (independent variable) used for prediction</li>\n  <li><strong>Label/Target:</strong> Output variable we want to predict</li>\n  <li><strong>Model:</strong> Mathematical function learned from training data</li>\n  <li><strong>Training Set:</strong> Data used to train the model (~70–80%)</li>\n  <li><strong>Test Set:</strong> Data used to evaluate the model (~20–30%)</li>\n</ul>\n\n<h3>Overfitting vs Underfitting</h3>\n<ul>\n  <li><strong>Overfitting:</strong> Model performs very well on training data but poorly on new data. (Too complex)</li>\n  <li><strong>Underfitting:</strong> Model performs poorly on both training and test data. (Too simple)</li>\n  <li><strong>Good Fit:</strong> Model generalizes well to new, unseen data.</li>\n</ul>\n<div class=\"callout callout-tip\">✅ <div>Solutions to overfitting: more data, regularization (L1/L2), cross-validation, dropout (neural nets).</div></div>",
        "questions": [
          {
            "questionNumber": 1,
            "text": "What is Machine Learning? Explain the difference between Supervised, Unsupervised, and Reinforcement Learning with examples.",
            "isImportant": true
          },
          {
            "questionNumber": 2,
            "text": "What is the difference between Training data and Test data? Why do we split datasets?",
            "isImportant": true
          },
          {
            "questionNumber": 3,
            "text": "Explain the terms: Feature, Label, Model, and Prediction in the context of Machine Learning.",
            "isImportant": false
          },
          {
            "questionNumber": 4,
            "text": "What is Overfitting and Underfitting? How can you prevent overfitting in a model?",
            "isImportant": false
          },
          {
            "questionNumber": 5,
            "text": "List and briefly explain the steps in a typical Machine Learning pipeline.",
            "isImportant": false
          }
        ]
      },
      {
        "chapterNumber": 2,
        "title": "Regression Algorithms",
        "video": "https://www.youtube.com/watch?v=zPG4NjIkCjc",
        "content": "<h3>Linear Regression</h3>\n<p>Predicts a continuous output based on one or more input features. The relationship between input (x) and output (y) is modeled as a straight line:</p>\n<pre><code>y = mx + b\nwhere:\n  y = predicted value\n  x = input feature\n  m = slope (weight)\n  b = intercept (bias)</code></pre>\n\n<h3>Cost Function — Mean Squared Error (MSE)</h3>\n<p>Measures how far predictions are from actual values:</p>\n<pre><code>MSE = (1/n) Σ(yᵢ − ŷᵢ)²</code></pre>\n<p>Goal: Minimize MSE by finding the best values of m and b.</p>\n\n<h3>Gradient Descent</h3>\n<p>An optimization algorithm that iteratively adjusts parameters to minimize the cost function:</p>\n<pre><code>m = m − α · (∂MSE/∂m)\nb = b − α · (∂MSE/∂b)\nwhere α = learning rate</code></pre>\n<div class=\"callout callout-warn\">⚠️ <div>Learning rate too high → overshoots minimum. Too low → converges slowly. Choose wisely!</div></div>\n\n<h3>Types of Regression</h3>\n<ul>\n  <li><strong>Simple Linear Regression:</strong> One feature → one output</li>\n  <li><strong>Multiple Linear Regression:</strong> Multiple features → one output</li>\n  <li><strong>Polynomial Regression:</strong> Fits a curved (non-linear) relationship</li>\n  <li><strong>Ridge Regression (L2):</strong> Adds penalty = λΣm² to reduce overfitting</li>\n  <li><strong>Lasso Regression (L1):</strong> Adds penalty = λΣ|m| — can reduce some weights to zero (feature selection)</li>\n</ul>",
        "questions": [
          {
            "questionNumber": 1,
            "text": "Explain Linear Regression. Write the equation of a simple linear regression line and explain each term.",
            "isImportant": true
          },
          {
            "questionNumber": 2,
            "text": "What is the cost function in Linear Regression? How does Gradient Descent minimize it?",
            "isImportant": true
          },
          {
            "questionNumber": 3,
            "text": "Differentiate between Simple Linear Regression and Multiple Linear Regression.",
            "isImportant": false
          },
          {
            "questionNumber": 4,
            "text": "What is Polynomial Regression? When should you use it over Linear Regression?",
            "isImportant": false
          },
          {
            "questionNumber": 5,
            "text": "Explain Ridge and Lasso Regression. How do they handle overfitting?",
            "isImportant": false
          }
        ]
      },
      {
        "chapterNumber": 3,
        "title": "Classification Algorithms",
        "video": "https://www.youtube.com/watch?v=yIYKR4sgzI8",
        "content": "<h3>Logistic Regression</h3>\n<p>Used for binary classification (Yes/No, 0/1). Uses the Sigmoid function to output probabilities:</p>\n<pre><code>σ(z) = 1 / (1 + e⁻ᶻ)   where z = mx + b\nOutput: 0 to 1 (interpreted as probability)\nIf output ≥ 0.5 → Class 1, else → Class 0</code></pre>\n\n<h3>K-Nearest Neighbours (KNN)</h3>\n<p>A simple, non-parametric algorithm that classifies a data point based on the majority class of its K nearest neighbours (using distance metrics like Euclidean distance).</p>\n<ul>\n  <li>Small K → overfitting (too sensitive to noise)</li>\n  <li>Large K → underfitting (too generalized)</li>\n  <li>Best K is found using cross-validation</li>\n</ul>\n\n<h3>Decision Trees</h3>\n<p>A tree-like model that splits data based on feature conditions. At each node, the feature that gives the best split is chosen using:</p>\n<ul>\n  <li><strong>Gini Impurity:</strong> G = 1 − Σpᵢ² (lower = purer)</li>\n  <li><strong>Information Gain (Entropy):</strong> Reduction in entropy after a split</li>\n</ul>\n\n<h3>Support Vector Machine (SVM)</h3>\n<p>Finds the optimal hyperplane that maximally separates two classes. The margin (distance between hyperplane and nearest points) is maximized.</p>\n<div class=\"callout callout-key\">💡 <div>Support Vectors = the data points closest to the hyperplane that define it.</div></div>\n\n<h3>Naive Bayes</h3>\n<p>Based on Bayes' theorem with the \"naive\" assumption that all features are independent of each other:</p>\n<pre><code>P(class | features) ∝ P(class) × P(features | class)</code></pre>",
        "questions": [
          {
            "questionNumber": 1,
            "text": "What is Logistic Regression? How is it different from Linear Regression? Explain the Sigmoid function.",
            "isImportant": true
          },
          {
            "questionNumber": 2,
            "text": "Explain the K-Nearest Neighbours (KNN) algorithm. What is the role of the value K?",
            "isImportant": true
          },
          {
            "questionNumber": 3,
            "text": "Describe the Decision Tree algorithm. What are the criteria used for splitting: Gini Impurity and Information Gain?",
            "isImportant": false
          },
          {
            "questionNumber": 4,
            "text": "What is a Support Vector Machine (SVM)? Explain the concept of a hyperplane and margin.",
            "isImportant": false
          },
          {
            "questionNumber": 5,
            "text": "Explain Naive Bayes classifier. What assumptions does it make?",
            "isImportant": false
          }
        ]
      },
      {
        "chapterNumber": 4,
        "title": "Clustering & Unsupervised Learning",
        "video": "https://www.youtube.com/watch?v=4b5d3muPQmA",
        "content": "<h3>K-Means Clustering</h3>\n<p>Groups data into K clusters by minimizing the distance between data points and their cluster center (centroid).</p>\n<p><strong>Steps:</strong></p>\n<ol>\n  <li>Choose K (number of clusters)</li>\n  <li>Randomly initialize K centroids</li>\n  <li>Assign each point to the nearest centroid</li>\n  <li>Recalculate centroids as mean of each cluster</li>\n  <li>Repeat steps 3–4 until centroids stop changing</li>\n</ol>\n<div class=\"callout callout-warn\">⚠️ <div>K-Means is sensitive to initial centroid placement and outliers. Use K-Means++ for better initialization.</div></div>\n\n<h3>Choosing K — Elbow Method</h3>\n<p>Plot WCSS (Within-Cluster Sum of Squares) vs K. The \"elbow point\" where WCSS stops decreasing rapidly is the optimal K.</p>\n\n<h3>PCA — Principal Component Analysis</h3>\n<p>A dimensionality reduction technique that transforms high-dimensional data into fewer dimensions (principal components) while retaining maximum variance.</p>\n<ul>\n  <li>PCA finds directions (components) of maximum variance</li>\n  <li>Components are orthogonal (uncorrelated)</li>\n  <li>Used for visualization (reduce to 2D/3D) and to speed up ML algorithms</li>\n</ul>\n<div class=\"callout callout-key\">💡 <div>PCA does not reduce data loss — it minimizes it by keeping the most important components.</div></div>\n\n<h3>Hierarchical Clustering</h3>\n<ul>\n  <li><strong>Agglomerative (bottom-up):</strong> Start with each point as its own cluster, merge closest clusters step by step</li>\n  <li><strong>Divisive (top-down):</strong> Start with all points in one cluster, split recursively</li>\n  <li>Result visualized as a <strong>Dendrogram</strong> — cut the dendrogram at a level to get K clusters</li>\n</ul>",
        "questions": [
          {
            "questionNumber": 1,
            "text": "Explain the K-Means clustering algorithm step by step. What are its limitations?",
            "isImportant": true
          },
          {
            "questionNumber": 2,
            "text": "What is the Elbow Method? How is it used to find the optimal K in K-Means?",
            "isImportant": false
          },
          {
            "questionNumber": 3,
            "text": "What is Principal Component Analysis (PCA)? How does it reduce dimensionality?",
            "isImportant": true
          },
          {
            "questionNumber": 4,
            "text": "Explain Hierarchical Clustering. How is a dendrogram interpreted?",
            "isImportant": false
          },
          {
            "questionNumber": 5,
            "text": "What is DBSCAN? How does it handle noise and outliers better than K-Means?",
            "isImportant": false
          }
        ]
      },
      {
        "chapterNumber": 5,
        "title": "Model Evaluation & Neural Networks",
        "video": "https://www.youtube.com/watch?v=aircAruvnKk",
        "content": "<h3>Confusion Matrix</h3>\n<p>A table used to evaluate classification model performance:</p>\n<pre><code>                 Predicted Positive  Predicted Negative\nActual Positive:       TP                  FN\nActual Negative:       FP                  TN</code></pre>\n<ul>\n  <li><strong>Accuracy</strong>  = (TP + TN) / Total</li>\n  <li><strong>Precision</strong> = TP / (TP + FP) — of predicted positives, how many are correct?</li>\n  <li><strong>Recall</strong>    = TP / (TP + FN) — of actual positives, how many were found?</li>\n  <li><strong>F1 Score</strong>  = 2 × (Precision × Recall) / (Precision + Recall)</li>\n</ul>\n<div class=\"callout callout-tip\">✅ <div>Use F1 Score when data is imbalanced (unequal classes).</div></div>\n\n<h3>K-Fold Cross-Validation</h3>\n<p>Technique to evaluate model performance more reliably:</p>\n<ol>\n  <li>Split data into K equal folds</li>\n  <li>Train on K−1 folds, test on the remaining fold</li>\n  <li>Repeat K times, each fold used as test once</li>\n  <li>Final score = average of all K scores</li>\n</ol>\n\n<h3>Neural Networks — Basics</h3>\n<ul>\n  <li><strong>Input Layer:</strong> Receives input features</li>\n  <li><strong>Hidden Layers:</strong> Extract patterns; each neuron applies weights + activation function</li>\n  <li><strong>Output Layer:</strong> Produces final prediction</li>\n  <li><strong>Activation Functions:</strong> ReLU, Sigmoid, Tanh, Softmax</li>\n</ul>\n\n<h3>Backpropagation</h3>\n<p>Algorithm that updates weights by propagating the error backwards through the network using the chain rule of calculus. This is how neural networks \"learn\".</p>\n<div class=\"callout callout-key\">💡 <div>Epoch = one complete pass through the entire training dataset. More epochs = more learning (up to a point).</div></div>",
        "questions": [
          {
            "questionNumber": 1,
            "text": "Explain the Confusion Matrix. Define Accuracy, Precision, Recall, and F1 Score with formulas.",
            "isImportant": true
          },
          {
            "questionNumber": 2,
            "text": "What is Cross-Validation? Explain K-Fold Cross-Validation with an example.",
            "isImportant": true
          },
          {
            "questionNumber": 3,
            "text": "What is ROC Curve and AUC? How are they used to evaluate a classifier?",
            "isImportant": false
          },
          {
            "questionNumber": 4,
            "text": "Explain the structure of a Neural Network: Input Layer, Hidden Layers, Output Layer, Activation Functions.",
            "isImportant": false
          },
          {
            "questionNumber": 5,
            "text": "What is Backpropagation? Describe how it updates weights in a neural network.",
            "isImportant": false
          }
        ]
      }
    ]
  },
  {
    "subjectId": "java",
    "name": "Java Programming",
    "icon": "☕",
    "order": 3,
    "tagline": "Subject 03 · Java Programming",
    "description": "Click any chapter title to open notes. Questions marked ⭐ are important for exams.",
    "tags": [
      "OOP",
      "Collections",
      "Exception",
      "Threads"
    ],
    "chapters": [
      {
        "chapterNumber": 1,
        "title": "Java Basics & Fundamentals",
        "video": "https://www.youtube.com/watch?v=eIrMbAQSU34",
        "content": "<h3>What is Java?</h3>\n<p>Java is a high-level, object-oriented, platform-independent programming language developed by <strong>Sun Microsystems</strong> in 1995.</p>\n<p><strong>Key features:</strong> Platform Independent, Object-Oriented, Robust, Secure, Multithreaded, Portable, High Performance.</p>\n\n<h3>JDK, JRE, and JVM</h3>\n<ul>\n  <li><strong>JVM (Java Virtual Machine):</strong> Executes Java bytecode. Makes Java platform-independent — \"Write Once, Run Anywhere\".</li>\n  <li><strong>JRE (Java Runtime Environment):</strong> JVM + standard libraries. Needed to run Java programs.</li>\n  <li><strong>JDK (Java Development Kit):</strong> JRE + compiler (javac) + tools. Needed to develop Java programs.</li>\n</ul>\n<div class=\"callout callout-key\">💡 <div>Java source (.java) → Compiler (javac) → Bytecode (.class) → JVM → Machine Code</div></div>\n\n<h3>Primitive Data Types</h3>\n<pre><code>byte    → 1 byte  → -128 to 127\nshort   → 2 bytes → -32768 to 32767\nint     → 4 bytes → ~2 billion\nlong    → 8 bytes → very large numbers\nfloat   → 4 bytes → decimal (~7 digits precision)\ndouble  → 8 bytes → decimal (~15 digits precision)\nchar    → 2 bytes → single character\nboolean → 1 bit  → true / false</code></pre>\n\n<h3>First Java Program</h3>\n<pre><code>public class Hello {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}</code></pre>\n<div class=\"callout callout-tip\">✅ <div>Java is case-sensitive. Class name must match the filename exactly.</div></div>",
        "questions": [
          {
            "questionNumber": 1,
            "text": "What is Java? Explain the features: Platform Independence, Object-Oriented, Robust, Secure, and Multithreaded.",
            "isImportant": true
          },
          {
            "questionNumber": 2,
            "text": "Explain the JDK, JRE, and JVM. What is the role of bytecode in Java's platform independence?",
            "isImportant": true
          },
          {
            "questionNumber": 3,
            "text": "List all primitive data types in Java with their sizes and default values. Give one example each.",
            "isImportant": false
          },
          {
            "questionNumber": 4,
            "text": "What are operators in Java? Explain Arithmetic, Relational, Logical, Bitwise, and Assignment operators with examples.",
            "isImportant": false
          },
          {
            "questionNumber": 5,
            "text": "Write a Java program to find whether a given number is Even or Odd using if-else.",
            "isImportant": false
          }
        ]
      },
      {
        "chapterNumber": 2,
        "title": "Object-Oriented Programming (OOP)",
        "video": "https://www.youtube.com/watch?v=a199KZGMNxk",
        "content": "<h3>4 Pillars of OOP</h3>\n<ul>\n  <li><strong>Encapsulation:</strong> Wrapping data (variables) and code (methods) together inside a class. Use private fields with public getters/setters.</li>\n  <li><strong>Inheritance:</strong> A class (child) acquires properties of another class (parent) using <code>extends</code>.</li>\n  <li><strong>Polymorphism:</strong> One interface, multiple forms. Achieved via method overloading and overriding.</li>\n  <li><strong>Abstraction:</strong> Hiding implementation details, showing only necessary features. Achieved via abstract classes and interfaces.</li>\n</ul>\n\n<h3>Method Overloading vs Overriding</h3>\n<pre><code>// Overloading — same name, different parameters (Compile-time)\nvoid add(int a, int b)    { }\nvoid add(double a, double b) { }\n\n// Overriding — child class redefines parent method (Runtime)\nclass Animal { void sound() { System.out.println(\"...\"); } }\nclass Dog extends Animal {\n    @Override\n    void sound() { System.out.println(\"Woof\"); }\n}</code></pre>\n\n<h3>this and super Keywords</h3>\n<ul>\n  <li><code>this</code> — refers to the current class object. Used to avoid ambiguity between instance and local variables.</li>\n  <li><code>super</code> — refers to the parent class. Used to call parent constructor or methods.</li>\n</ul>\n\n<h3>Constructors</h3>\n<pre><code>class Student {\n    String name;\n    int age;\n    // Parameterized Constructor\n    Student(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n}</code></pre>\n<div class=\"callout callout-warn\">⚠️ <div>Constructors have no return type. They are called automatically when an object is created using <code>new</code>.</div></div>",
        "questions": [
          {
            "questionNumber": 1,
            "text": "Explain the four pillars of OOP: Encapsulation, Inheritance, Polymorphism, and Abstraction with real-world examples.",
            "isImportant": true
          },
          {
            "questionNumber": 2,
            "text": "What is Method Overloading and Method Overriding? How are they different? Give Java code examples.",
            "isImportant": true
          },
          {
            "questionNumber": 3,
            "text": "Explain <code>this</code> and <code>super</code> keywords in Java with examples.",
            "isImportant": true
          },
          {
            "questionNumber": 4,
            "text": "What is a Constructor? Explain Default, Parameterized, and Copy constructors in Java.",
            "isImportant": false
          },
          {
            "questionNumber": 5,
            "text": "Explain Single, Multilevel, and Hierarchical Inheritance in Java with code examples.",
            "isImportant": false
          }
        ]
      },
      {
        "chapterNumber": 3,
        "title": "Interfaces & Abstract Classes",
        "video": "https://www.youtube.com/watch?v=v12JmHkE_sM",
        "content": "<h3>Abstract Class</h3>\n<p>A class declared with <code>abstract</code> keyword. Cannot be instantiated directly. Can have abstract (no body) and concrete (has body) methods.</p>\n<pre><code>abstract class Shape {\n    abstract double area(); // must be overridden\n    void display() { System.out.println(\"Shape\"); } // concrete\n}\nclass Circle extends Shape {\n    double r;\n    Circle(double r) { this.r = r; }\n    double area() { return Math.PI * r * r; }\n}</code></pre>\n\n<h3>Interface</h3>\n<p>A blueprint of a class. All methods are abstract by default (Java 7). A class <code>implements</code> an interface.</p>\n<pre><code>interface Drawable {\n    void draw(); // public abstract by default\n}\nclass Rectangle implements Drawable {\n    public void draw() { System.out.println(\"Drawing Rectangle\"); }\n}</code></pre>\n<div class=\"callout callout-key\">💡 <div>Key Difference: Abstract class = partial abstraction. Interface = 100% abstraction (before Java 8). A class can implement multiple interfaces but extend only one class.</div></div>\n\n<h3>Access Modifiers</h3>\n<pre><code>private   → Only within the same class\ndefault   → Within the same package\nprotected → Same package + subclasses\npublic    → Everywhere</code></pre>\n\n<h3>static and final</h3>\n<ul>\n  <li><code>static</code> — belongs to the class, not to any instance. Shared by all objects.</li>\n  <li><code>final</code> — variable: constant value | method: cannot override | class: cannot extend</li>\n</ul>",
        "questions": [
          {
            "questionNumber": 1,
            "text": "What is an Abstract Class in Java? How is it different from a regular class? When should you use it?",
            "isImportant": true
          },
          {
            "questionNumber": 2,
            "text": "What is an Interface in Java? How is it different from an Abstract Class? Can a class implement multiple interfaces?",
            "isImportant": true
          },
          {
            "questionNumber": 3,
            "text": "What are the <code>static</code> and <code>final</code> keywords in Java? Explain with examples.",
            "isImportant": false
          },
          {
            "questionNumber": 4,
            "text": "Write a Java program demonstrating the use of an interface for achieving runtime polymorphism.",
            "isImportant": false
          },
          {
            "questionNumber": 5,
            "text": "What are access modifiers in Java? Explain <code>private</code>, <code>protected</code>, <code>public</code>, and default with a table.",
            "isImportant": false
          }
        ]
      },
      {
        "chapterNumber": 4,
        "title": "Exception Handling",
        "video": "https://www.youtube.com/watch?v=1XAfapoCRgQ",
        "content": "<h3>What is an Exception?</h3>\n<p>An exception is an unwanted event that disrupts normal program flow during execution. Exception handling allows programs to handle errors gracefully without crashing.</p>\n\n<h3>try-catch-finally</h3>\n<pre><code>try {\n    int result = 10 / 0; // throws ArithmeticException\n} catch (ArithmeticException e) {\n    System.out.println(\"Error: \" + e.getMessage());\n} finally {\n    System.out.println(\"This always executes.\");\n}</code></pre>\n\n<h3>throw vs throws</h3>\n<ul>\n  <li><code>throw</code> — explicitly throws an exception inside a method</li>\n  <li><code>throws</code> — declares that a method might throw exceptions (in method signature)</li>\n</ul>\n<pre><code>void checkAge(int age) throws Exception {\n    if (age &lt; 18) throw new Exception(\"Too young!\");\n}</code></pre>\n\n<h3>Checked vs Unchecked Exceptions</h3>\n<ul>\n  <li><strong>Checked:</strong> Must be handled at compile time. Example: IOException, SQLException, FileNotFoundException</li>\n  <li><strong>Unchecked:</strong> Occur at runtime. Example: ArithmeticException, NullPointerException, ArrayIndexOutOfBoundsException</li>\n</ul>\n\n<h3>Custom Exception</h3>\n<pre><code>class AgeException extends Exception {\n    AgeException(String msg) { super(msg); }\n}\n// Usage:\nthrow new AgeException(\"Age must be 18+\");</code></pre>\n<div class=\"callout callout-tip\">✅ <div>The <code>finally</code> block always executes — even if an exception is thrown or not caught. Use it for cleanup (closing files, DB connections).</div></div>",
        "questions": [
          {
            "questionNumber": 1,
            "text": "What is Exception Handling in Java? Explain <code>try</code>, <code>catch</code>, <code>finally</code>, <code>throw</code>, and <code>throws</code> keywords.",
            "isImportant": true
          },
          {
            "questionNumber": 2,
            "text": "Differentiate between Checked and Unchecked Exceptions with examples. Give 3 examples of each.",
            "isImportant": true
          },
          {
            "questionNumber": 3,
            "text": "Write a Java program to handle <code>ArithmeticException</code> when dividing a number by zero.",
            "isImportant": false
          },
          {
            "questionNumber": 4,
            "text": "How do you create a Custom Exception class in Java? Write an example of a user-defined exception.",
            "isImportant": false
          },
          {
            "questionNumber": 5,
            "text": "Explain the exception hierarchy in Java. What is the difference between <code>Error</code> and <code>Exception</code>?",
            "isImportant": false
          }
        ]
      },
      {
        "chapterNumber": 5,
        "title": "Collections Framework",
        "video": "https://www.youtube.com/watch?v=viTHG_4A5TQ",
        "content": "<h3>Java Collections Framework</h3>\n<p>A unified architecture for storing and manipulating groups of objects. Key interfaces:</p>\n<ul>\n  <li><strong>Collection</strong> → List, Set, Queue</li>\n  <li><strong>Map</strong> (key-value pairs) → HashMap, TreeMap</li>\n</ul>\n\n<h3>List Implementations</h3>\n<ul>\n  <li><strong>ArrayList:</strong> Dynamic array. Fast random access (O(1)). Slow insert/delete in middle.</li>\n  <li><strong>LinkedList:</strong> Doubly linked list. Fast insert/delete (O(1)). Slow random access.</li>\n  <li><strong>Vector:</strong> Synchronized ArrayList (thread-safe but slower).</li>\n</ul>\n<pre><code>ArrayList&lt;String&gt; list = new ArrayList&lt;&gt;();\nlist.add(\"Java\"); list.add(\"Python\");\nlist.get(0);      // Quick access\nlist.remove(1);   // Remove by index</code></pre>\n\n<h3>Map Implementations</h3>\n<ul>\n  <li><strong>HashMap:</strong> Key-value pairs, unordered, allows null key, not thread-safe.</li>\n  <li><strong>LinkedHashMap:</strong> Maintains insertion order.</li>\n  <li><strong>TreeMap:</strong> Sorted by key (natural or custom order).</li>\n  <li><strong>Hashtable:</strong> Synchronized, no null keys/values (legacy).</li>\n</ul>\n\n<h3>Iterating Collections</h3>\n<pre><code>// for-each loop\nfor (String s : list) { System.out.println(s); }\n\n// Iterator\nIterator&lt;String&gt; it = list.iterator();\nwhile (it.hasNext()) { System.out.println(it.next()); }</code></pre>\n<div class=\"callout callout-key\">💡 <div>Use <code>HashMap</code> for fast lookups. Use <code>TreeMap</code> when you need sorted keys. Use <code>LinkedHashMap</code> for insertion-order iteration.</div></div>",
        "questions": [
          {
            "questionNumber": 1,
            "text": "What is the Java Collections Framework? Explain the hierarchy: Collection → List, Set, Queue interfaces.",
            "isImportant": true
          },
          {
            "questionNumber": 2,
            "text": "Compare <code>ArrayList</code> vs <code>LinkedList</code> vs <code>Vector</code>. When would you use each?",
            "isImportant": true
          },
          {
            "questionNumber": 3,
            "text": "Difference between <code>HashMap</code> and <code>Hashtable</code>? Explain <code>TreeMap</code> and <code>LinkedHashMap</code> too.",
            "isImportant": false
          },
          {
            "questionNumber": 4,
            "text": "Write a Java program to iterate over a List using Iterator, for-each loop, and ListIterator.",
            "isImportant": false
          },
          {
            "questionNumber": 5,
            "text": "What is Generics in Java? Give an example of a generic class and a generic method.",
            "isImportant": false
          }
        ]
      },
      {
        "chapterNumber": 6,
        "title": "Multithreading & File I/O",
        "video": "https://www.youtube.com/watch?v=TCjd8y2B6N0",
        "content": "<h3>Thread Life Cycle</h3>\n<ul>\n  <li><strong>New:</strong> Thread object created but not started</li>\n  <li><strong>Runnable:</strong> After calling start(), ready to run</li>\n  <li><strong>Running:</strong> Thread is executing</li>\n  <li><strong>Blocked/Waiting:</strong> Waiting for a resource or another thread</li>\n  <li><strong>Terminated/Dead:</strong> Thread execution completed</li>\n</ul>\n\n<h3>Creating Threads</h3>\n<pre><code>// Method 1: Extend Thread class\nclass MyThread extends Thread {\n    public void run() { System.out.println(\"Thread running\"); }\n}\nnew MyThread().start();\n\n// Method 2: Implement Runnable (preferred)\nclass MyRunnable implements Runnable {\n    public void run() { System.out.println(\"Runnable running\"); }\n}\nnew Thread(new MyRunnable()).start();</code></pre>\n<div class=\"callout callout-tip\">✅ <div>Prefer <code>Runnable</code> over extending <code>Thread</code> — your class can still extend another class (Java allows single inheritance only).</div></div>\n\n<h3>Synchronization</h3>\n<p>Used to prevent race conditions when multiple threads access shared data:</p>\n<pre><code>synchronized void deposit(int amount) {\n    balance += amount; // only one thread at a time\n}</code></pre>\n\n<h3>File I/O</h3>\n<pre><code>// Writing to file\nFileWriter fw = new FileWriter(\"notes.txt\");\nfw.write(\"Hello File!\");\nfw.close();\n\n// Reading from file\nFileReader fr = new FileReader(\"notes.txt\");\nBufferedReader br = new BufferedReader(fr);\nString line;\nwhile ((line = br.readLine()) != null)\n    System.out.println(line);\nbr.close();</code></pre>",
        "questions": [
          {
            "questionNumber": 1,
            "text": "What is a Thread in Java? Explain Thread Life Cycle states: New, Runnable, Running, Blocked, Dead.",
            "isImportant": true
          },
          {
            "questionNumber": 2,
            "text": "How do you create a thread in Java? Compare extending <code>Thread</code> class vs implementing <code>Runnable</code> interface.",
            "isImportant": true
          },
          {
            "questionNumber": 3,
            "text": "What is synchronization in Java? Explain with an example how it prevents race conditions.",
            "isImportant": false
          },
          {
            "questionNumber": 4,
            "text": "Explain File I/O in Java. Write a program to read from and write to a text file using <code>FileReader</code> and <code>FileWriter</code>.",
            "isImportant": false
          },
          {
            "questionNumber": 5,
            "text": "What is serialization in Java? Explain the <code>Serializable</code> interface and the role of <code>transient</code> keyword.",
            "isImportant": false
          }
        ]
      }
    ]
  },
  {
    "subjectId": "python",
    "name": "Python Programming",
    "icon": "🐍",
    "order": 4,
    "tagline": "Subject 04 · Python Programming",
    "description": "Click any chapter title to open notes. Questions marked ⭐ are important for exams.",
    "tags": [
      "Basics",
      "Functions",
      "File I/O",
      "Libraries"
    ],
    "chapters": [
      {
        "chapterNumber": 1,
        "title": "Python Basics",
        "video": "https://www.youtube.com/watch?v=kqtD5dpn9C8",
        "content": "<h3>What is Python?</h3>\n<p>Python is a high-level, interpreted, dynamically-typed programming language known for its simple, readable syntax. Created by <strong>Guido van Rossum</strong> in 1991.</p>\n<p><strong>Key features:</strong> Easy to learn, Interpreted, Dynamically typed, Extensive libraries, Cross-platform, Open source.</p>\n\n<h3>Data Types</h3>\n<pre><code>x = 10          # int\ny = 3.14        # float\nname = \"Alice\"  # str\nflag = True     # bool\nlst  = [1,2,3]  # list (mutable, ordered)\ntup  = (1,2,3)  # tuple (immutable, ordered)\nst   = {1,2,3}  # set (unordered, unique)\nd    = {\"a\":1}  # dict (key-value pairs)</code></pre>\n\n<h3>Type Checking & Conversion</h3>\n<pre><code>type(x)         # Returns data type\nint(\"42\")       # str → int: 42\nstr(3.14)       # float → str: \"3.14\"\nfloat(\"3.14\")   # str → float: 3.14\nlist((1,2,3))   # tuple → list</code></pre>\n\n<h3>Input & Output</h3>\n<pre><code>name = input(\"Enter your name: \")   # Always returns string\nage  = int(input(\"Enter age: \"))     # Convert to int\nprint(f\"Hello {name}, you are {age} years old.\")  # f-string</code></pre>\n<div class=\"callout callout-key\">💡 <div>Python uses indentation (spaces/tabs) to define code blocks — no curly braces! Consistent indentation is mandatory.</div></div>\n<div class=\"callout callout-tip\">✅ <div>Swap variables: <code>a, b = b, a</code> — no temporary variable needed!</div></div>",
        "questions": [
          {
            "questionNumber": 1,
            "text": "What is Python? List its key features. How is Python different from Java and C++?",
            "isImportant": true
          },
          {
            "questionNumber": 2,
            "text": "Explain the built-in data types in Python: <code>int</code>, <code>float</code>, <code>str</code>, <code>bool</code>, <code>list</code>, <code>tuple</code>, <code>set</code>, <code>dict</code>. Give one example each.",
            "isImportant": true
          },
          {
            "questionNumber": 3,
            "text": "What is type casting in Python? Explain implicit and explicit type conversion with examples.",
            "isImportant": false
          },
          {
            "questionNumber": 4,
            "text": "Explain the use of <code>input()</code> and <code>print()</code> in Python. What is string formatting using f-strings?",
            "isImportant": false
          },
          {
            "questionNumber": 5,
            "text": "Write a Python program to swap two numbers without using a third variable.",
            "isImportant": false
          }
        ]
      },
      {
        "chapterNumber": 2,
        "title": "Control Flow & Loops",
        "video": "https://www.youtube.com/watch?v=PqFKRqpHrjw",
        "content": "<h3>if-elif-else</h3>\n<pre><code>marks = int(input(\"Enter marks: \"))\nif marks >= 90:\n    print(\"Grade A\")\nelif marks >= 75:\n    print(\"Grade B\")\nelif marks >= 60:\n    print(\"Grade C\")\nelse:\n    print(\"Fail\")</code></pre>\n\n<h3>Loops</h3>\n<pre><code># for loop — iterates over a sequence\nfor i in range(1, 6):   # 1 to 5\n    print(i)\n\n# while loop — runs while condition is True\nn = 1\nwhile n <= 5:\n    print(n)\n    n += 1</code></pre>\n\n<h3>Loop Control Statements</h3>\n<ul>\n  <li><code>break</code> — exits the loop immediately</li>\n  <li><code>continue</code> — skips the current iteration, goes to next</li>\n  <li><code>pass</code> — does nothing (placeholder)</li>\n</ul>\n<pre><code>for i in range(10):\n    if i == 5: break      # stops at 5\n    if i % 2 == 0: continue  # skip even numbers\n    print(i)  # prints: 1, 3</code></pre>\n\n<h3>List Comprehension</h3>\n<p>A concise way to create lists:</p>\n<pre><code># Traditional\nsquares = []\nfor i in range(1, 6):\n    squares.append(i**2)\n\n# List Comprehension (same result, one line)\nsquares = [i**2 for i in range(1, 6)]\n# → [1, 4, 9, 16, 25]\n\n# With condition\nevens = [i for i in range(20) if i % 2 == 0]</code></pre>\n<div class=\"callout callout-tip\">✅ <div>Fibonacci series: Start with 0, 1. Each next number = sum of previous two: 0, 1, 1, 2, 3, 5, 8, 13…</div></div>",
        "questions": [
          {
            "questionNumber": 1,
            "text": "Explain <code>if</code>, <code>elif</code>, <code>else</code> statements in Python with a grading system example.",
            "isImportant": true
          },
          {
            "questionNumber": 2,
            "text": "Explain <code>for</code> loop and <code>while</code> loop in Python. What is the use of <code>break</code>, <code>continue</code>, and <code>pass</code>?",
            "isImportant": true
          },
          {
            "questionNumber": 3,
            "text": "Write a Python program to print all prime numbers between 1 and 100 using a for loop.",
            "isImportant": false
          },
          {
            "questionNumber": 4,
            "text": "What is a List Comprehension in Python? Compare it with a traditional for loop. Give 3 examples.",
            "isImportant": false
          },
          {
            "questionNumber": 5,
            "text": "Write a Python program to generate the Fibonacci series up to N terms using a while loop.",
            "isImportant": false
          }
        ]
      },
      {
        "chapterNumber": 3,
        "title": "Functions & Modules",
        "video": "https://www.youtube.com/watch?v=9Os0o3wzS_I",
        "content": "<h3>Defining Functions</h3>\n<pre><code>def greet(name, message=\"Hello\"):  # default argument\n    return f\"{message}, {name}!\"\n\nprint(greet(\"Alice\"))           # Hello, Alice!\nprint(greet(\"Bob\", \"Hi\"))       # Hi, Bob!</code></pre>\n\n<h3>*args and **kwargs</h3>\n<pre><code>def total(*args):         # accepts any number of positional args\n    return sum(args)\ntotal(1, 2, 3, 4)        # → 10\n\ndef info(**kwargs):       # accepts any number of keyword args\n    for k, v in kwargs.items():\n        print(f\"{k}: {v}\")\ninfo(name=\"Alice\", age=21)</code></pre>\n\n<h3>Lambda Functions</h3>\n<p>Anonymous (nameless) one-line functions:</p>\n<pre><code>square = lambda x: x**2\nprint(square(5))         # → 25\n\n# With map, filter, reduce\nnums = [1, 2, 3, 4, 5]\ndoubled  = list(map(lambda x: x*2, nums))    # [2,4,6,8,10]\nevens    = list(filter(lambda x: x%2==0, nums))  # [2,4]</code></pre>\n\n<h3>Recursion</h3>\n<pre><code>def factorial(n):\n    if n == 0 or n == 1:  # base case\n        return 1\n    return n * factorial(n - 1)  # recursive call\nprint(factorial(5))  # → 120</code></pre>\n\n<h3>Modules</h3>\n<pre><code>import math\nprint(math.sqrt(16))     # 4.0\nprint(math.pi)           # 3.14159...\n\nfrom math import sqrt    # import specific function\nprint(sqrt(25))          # 5.0\n\nimport numpy as np       # alias</code></pre>\n<div class=\"callout callout-key\">💡 <div>LEGB Rule (variable scope): Local → Enclosing → Global → Built-in</div></div>",
        "questions": [
          {
            "questionNumber": 1,
            "text": "What is a function in Python? Explain with syntax. What are default arguments, keyword arguments, and *args / **kwargs?",
            "isImportant": true
          },
          {
            "questionNumber": 2,
            "text": "What is a Lambda function? Compare with a regular function. Give 3 examples using <code>map()</code>, <code>filter()</code>, <code>reduce()</code>.",
            "isImportant": true
          },
          {
            "questionNumber": 3,
            "text": "Explain Recursion in Python. Write a recursive function to compute the factorial of a number.",
            "isImportant": false
          },
          {
            "questionNumber": 4,
            "text": "What is a Python Module? How do you create and import a module? Explain <code>import</code>, <code>from ... import</code>, and alias.",
            "isImportant": false
          },
          {
            "questionNumber": 5,
            "text": "Explain the scope of variables in Python: Local, Enclosing, Global, Built-in (LEGB Rule).",
            "isImportant": false
          }
        ]
      },
      {
        "chapterNumber": 4,
        "title": "OOP in Python & File Handling",
        "video": "https://www.youtube.com/watch?v=JeznW_7DlB0",
        "content": "<h3>Classes and Objects</h3>\n<pre><code>class Student:\n    def __init__(self, name, age):  # constructor\n        self.name = name   # instance variable\n        self.age = age\n\n    def greet(self):\n        return f\"Hi, I am {self.name}\"\n\ns1 = Student(\"Alice\", 20)\nprint(s1.greet())  # Hi, I am Alice</code></pre>\n<div class=\"callout callout-key\">💡 <div><code>self</code> refers to the current object instance (like <code>this</code> in Java). Always the first parameter in instance methods.</div></div>\n\n<h3>Inheritance</h3>\n<pre><code>class Animal:\n    def speak(self): return \"...\"\n\nclass Dog(Animal):          # inherits from Animal\n    def speak(self): return \"Woof!\"\n\nclass Cat(Animal):\n    def speak(self): return \"Meow!\"\n\n# Multiple Inheritance\nclass C(A, B): pass\n\n# super() — call parent class method\nclass Dog(Animal):\n    def __init__(self, name):\n        super().__init__(name)  # calls Animal's __init__</code></pre>\n\n<h3>File Handling</h3>\n<pre><code># Writing\nwith open(\"file.txt\", \"w\") as f:\n    f.write(\"Hello, file!\")\n\n# Reading\nwith open(\"file.txt\", \"r\") as f:\n    content = f.read()\n    print(content)\n\n# Append\nwith open(\"file.txt\", \"a\") as f:\n    f.write(\"\nNew line\")</code></pre>\n<p>File modes: <code>r</code>=read, <code>w</code>=write (overwrite), <code>a</code>=append, <code>rb/wb</code>=binary</p>\n<div class=\"callout callout-tip\">✅ <div>Always use <code>with open(...)</code> — it automatically closes the file, even if an exception occurs.</div></div>",
        "questions": [
          {
            "questionNumber": 1,
            "text": "Explain Classes and Objects in Python. What is <code>__init__</code>? What is the role of <code>self</code>?",
            "isImportant": true
          },
          {
            "questionNumber": 2,
            "text": "Explain Inheritance in Python: Single, Multiple, Multilevel. What is <code>super()</code>?",
            "isImportant": true
          },
          {
            "questionNumber": 3,
            "text": "What are Dunder (Magic) methods in Python? Explain <code>__str__</code>, <code>__len__</code>, <code>__add__</code> with examples.",
            "isImportant": false
          },
          {
            "questionNumber": 4,
            "text": "Explain File Handling in Python. How do you open, read, write, and close a file? Explain modes: <code>r</code>, <code>w</code>, <code>a</code>, <code>rb</code>.",
            "isImportant": true
          },
          {
            "questionNumber": 5,
            "text": "What are Decorators in Python? Write a simple decorator that measures the execution time of a function.",
            "isImportant": false
          }
        ]
      },
      {
        "chapterNumber": 5,
        "title": "Python Libraries & Exception Handling",
        "video": "https://www.youtube.com/watch?v=N_WJhFkH7OE",
        "content": "<h3>Exception Handling</h3>\n<pre><code>try:\n    num = int(input(\"Enter number: \"))\n    result = 10 / num\nexcept ValueError:\n    print(\"Not a valid number!\")\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero!\")\nelse:\n    print(f\"Result: {result}\")     # runs if no exception\nfinally:\n    print(\"Done.\")                 # always runs</code></pre>\n\n<h3>Custom Exception</h3>\n<pre><code>class AgeError(Exception):\n    def __init__(self, msg): super().__init__(msg)\n\nraise AgeError(\"Age must be 18+\")</code></pre>\n\n<h3>NumPy</h3>\n<pre><code>import numpy as np\narr = np.array([1, 2, 3, 4, 5])\nprint(arr * 2)           # [2 4 6 8 10]\nprint(arr.mean())        # 3.0\nprint(arr[1:4])          # [2 3 4] (slicing)\nmat = np.zeros((3, 3))   # 3x3 matrix of zeros</code></pre>\n\n<h3>Pandas</h3>\n<pre><code>import pandas as pd\ndf = pd.DataFrame({\n    \"Name\": [\"Alice\", \"Bob\", \"Charlie\"],\n    \"Marks\": [85, 90, 78]\n})\nprint(df.head())         # first 5 rows\nprint(df.describe())     # statistics\nprint(df[\"Marks\"].mean())  # 84.33</code></pre>\n\n<h3>Matplotlib</h3>\n<pre><code>import matplotlib.pyplot as plt\nx = [1, 2, 3, 4, 5]\ny = [10, 20, 15, 30, 25]\n\nplt.plot(x, y, marker='o')    # line chart\nplt.title(\"Student Marks\")\nplt.xlabel(\"Student\"); plt.ylabel(\"Marks\")\nplt.show()\n\nplt.bar(x, y, color='steelblue')  # bar chart\nplt.show()</code></pre>\n<div class=\"callout callout-key\">💡 <div>Virtual Environments: <code>python -m venv env</code> then <code>envScriptsactivate</code> (Windows). Isolates project dependencies.</div></div>",
        "questions": [
          {
            "questionNumber": 1,
            "text": "Explain Exception Handling in Python using <code>try</code>, <code>except</code>, <code>else</code>, <code>finally</code>. Raise a custom exception.",
            "isImportant": true
          },
          {
            "questionNumber": 2,
            "text": "What is NumPy? Explain arrays, indexing, slicing, and basic operations with examples.",
            "isImportant": true
          },
          {
            "questionNumber": 3,
            "text": "What is Pandas? How do you create a DataFrame? Explain <code>head()</code>, <code>tail()</code>, <code>describe()</code>, <code>groupby()</code>.",
            "isImportant": false
          },
          {
            "questionNumber": 4,
            "text": "Explain Matplotlib. Write a Python program to plot a Bar chart and Line graph for student marks data.",
            "isImportant": false
          },
          {
            "questionNumber": 5,
            "text": "What are Python Virtual Environments? How do you create one using <code>venv</code>? Why are they used in projects?",
            "isImportant": false
          }
        ]
      }
    ]
  }
];
