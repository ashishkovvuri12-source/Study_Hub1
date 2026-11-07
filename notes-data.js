const NOTES = {
  maths: {
    name: "Mathematics", icon: "📐",
    chapters: [
      {
        id: 1, title: "Number System & Basic Algebra",
        video: "https://www.youtube.com/watch?v=kRj8M_qgQeA",
        content: `
<h3>Number System</h3>
<p>Numbers are classified into different types:</p>
<ul>
  <li><strong>Natural Numbers (N):</strong> 1, 2, 3, 4, … (counting numbers)</li>
  <li><strong>Whole Numbers (W):</strong> 0, 1, 2, 3, … (natural + zero)</li>
  <li><strong>Integers (Z):</strong> …−2, −1, 0, 1, 2, … (positive + negative)</li>
  <li><strong>Rational Numbers (Q):</strong> Numbers of the form p/q where p, q are integers and q ≠ 0. Example: 1/2, −3/4, 0.5</li>
  <li><strong>Irrational Numbers:</strong> Cannot be expressed as p/q. Example: √2, π, e</li>
  <li><strong>Real Numbers (R):</strong> All rational + irrational numbers combined</li>
</ul>
<div class="callout callout-key">💡 <div>Every integer is a rational number (e.g., 5 = 5/1), but not every rational number is an integer.</div></div>

<h3>Quadratic Equations</h3>
<p>A quadratic equation has the form: <code>ax² + bx + c = 0</code></p>
<ul>
  <li><strong>Factorization:</strong> Find two numbers whose product = ac and sum = b</li>
  <li><strong>Quadratic Formula:</strong> x = (−b ± √(b²−4ac)) / 2a</li>
  <li><strong>Discriminant (D) = b²−4ac:</strong></li>
</ul>
<ul>
  <li>D &gt; 0 → Two distinct real roots</li>
  <li>D = 0 → One repeated real root</li>
  <li>D &lt; 0 → No real roots (complex roots)</li>
</ul>
<div class="callout callout-tip">✅ <div>Vieta's Formulas: Sum of roots = −b/a &nbsp;|&nbsp; Product of roots = c/a</div></div>

<h3>Solved Example</h3>
<p>Solve: x² − 7x + 12 = 0</p>
<pre><code>Find two numbers: product = 12, sum = 7 → (3 and 4)
x² − 3x − 4x + 12 = 0
x(x−3) − 4(x−3) = 0
(x−3)(x−4) = 0
∴ x = 3  or  x = 4</code></pre>
<div class="callout callout-warn">⚠️ <div>Always check: substitute roots back into the original equation to verify.</div></div>`
      },
      {
        id: 2, title: "Matrices & Determinants",
        video: "https://www.youtube.com/watch?v=xyAuNHPsq-g",
        content: `
<h3>What is a Matrix?</h3>
<p>A matrix is a rectangular arrangement of numbers in rows and columns, enclosed in square brackets.</p>
<p>A matrix with m rows and n columns is called an <strong>m × n matrix</strong>.</p>

<h3>Types of Matrices</h3>
<ul>
  <li><strong>Row Matrix:</strong> Only 1 row → [1, 2, 3] (1×3)</li>
  <li><strong>Column Matrix:</strong> Only 1 column</li>
  <li><strong>Square Matrix:</strong> Rows = Columns (e.g., 2×2, 3×3)</li>
  <li><strong>Identity Matrix (I):</strong> Diagonal elements = 1, rest = 0</li>
  <li><strong>Zero Matrix:</strong> All elements = 0</li>
  <li><strong>Diagonal Matrix:</strong> Non-diagonal elements = 0</li>
</ul>

<h3>Matrix Operations</h3>
<ul>
  <li><strong>Addition:</strong> Add corresponding elements (matrices must be same size)</li>
  <li><strong>Multiplication:</strong> A(m×n) × B(n×p) = C(m×p) — columns of A must equal rows of B</li>
  <li><strong>Transpose (Aᵀ):</strong> Swap rows and columns</li>
</ul>
<div class="callout callout-warn">⚠️ <div>Matrix multiplication is NOT commutative: A×B ≠ B×A in general.</div></div>

<h3>Determinant of 2×2 Matrix</h3>
<pre><code>If A = [[a, b], [c, d]]
det(A) = |A| = ad − bc</code></pre>

<h3>Inverse of a Matrix</h3>
<p>A⁻¹ = (1/|A|) × adj(A)</p>
<p>Matrix inverse exists only when det(A) ≠ 0 (called Non-Singular matrix).</p>
<div class="callout callout-key">💡 <div>Verification: A × A⁻¹ = I (Identity Matrix)</div></div>

<h3>Cramer's Rule</h3>
<p>For system: ax + by = e, cx + dy = f</p>
<pre><code>D  = ad − bc
Dx = ed − bf
Dy = af − ec
x = Dx/D,  y = Dy/D</code></pre>`
      },
      {
        id: 3, title: "Differential Calculus",
        video: "https://www.youtube.com/watch?v=WUvTyaaNkzM",
        content: `
<h3>What is a Derivative?</h3>
<p>The derivative of a function f(x) measures the rate of change of f with respect to x. Geometrically, it is the slope of the tangent line to the curve at a point.</p>
<pre><code>f'(x) = lim(h→0) [f(x+h) − f(x)] / h</code></pre>

<h3>Basic Differentiation Rules</h3>
<ul>
  <li><strong>Power Rule:</strong> d/dx(xⁿ) = n·xⁿ⁻¹</li>
  <li><strong>Constant Rule:</strong> d/dx(c) = 0</li>
  <li><strong>Sum Rule:</strong> d/dx(f+g) = f' + g'</li>
  <li><strong>Product Rule:</strong> d/dx(f·g) = f'g + fg'</li>
  <li><strong>Quotient Rule:</strong> d/dx(f/g) = (f'g − fg') / g²</li>
  <li><strong>Chain Rule:</strong> d/dx[f(g(x))] = f'(g(x)) · g'(x)</li>
</ul>

<h3>Standard Derivatives</h3>
<ul>
  <li>d/dx(sin x) = cos x</li>
  <li>d/dx(cos x) = −sin x</li>
  <li>d/dx(eˣ) = eˣ</li>
  <li>d/dx(ln x) = 1/x</li>
</ul>
<div class="callout callout-tip">✅ <div>Chain Rule example: d/dx[(3x²+1)⁵] = 5(3x²+1)⁴ · 6x = 30x(3x²+1)⁴</div></div>

<h3>Maxima & Minima</h3>
<ul>
  <li>Find f'(x) = 0 → these are critical points</li>
  <li>If f''(x) &lt; 0 at critical point → Local Maximum</li>
  <li>If f''(x) &gt; 0 at critical point → Local Minimum</li>
</ul>`
      },
      {
        id: 4, title: "Integral Calculus",
        video: "https://www.youtube.com/watch?v=rfG8ce4nNh0",
        content: `
<h3>What is Integration?</h3>
<p>Integration is the reverse process of differentiation. It is used to find areas under curves, total quantities, and accumulation of values.</p>
<ul>
  <li><strong>Indefinite Integral:</strong> ∫f(x)dx = F(x) + C (C = constant of integration)</li>
  <li><strong>Definite Integral:</strong> ∫ₐᵇ f(x)dx = F(b) − F(a) (gives a numerical value)</li>
</ul>

<h3>Standard Integration Formulas</h3>
<ul>
  <li>∫xⁿ dx = xⁿ⁺¹/(n+1) + C &nbsp;(n ≠ −1)</li>
  <li>∫eˣ dx = eˣ + C</li>
  <li>∫sin x dx = −cos x + C</li>
  <li>∫cos x dx = sin x + C</li>
  <li>∫(1/x) dx = ln|x| + C</li>
</ul>

<h3>Substitution Method</h3>
<p>Used when the integrand has a composite function:</p>
<pre><code>Example: ∫sin(3x) dx
Let u = 3x → du = 3dx → dx = du/3
∫sin(u) · du/3 = −cos(u)/3 + C = −cos(3x)/3 + C</code></pre>

<h3>Fundamental Theorem of Calculus</h3>
<p>If F is an antiderivative of f, then:</p>
<pre><code>∫ₐᵇ f(x)dx = F(b) − F(a)</code></pre>
<div class="callout callout-key">💡 <div>This theorem connects differentiation and integration — they are inverse operations.</div></div>`
      },
      {
        id: 5, title: "Probability & Statistics",
        video: "https://www.youtube.com/watch?v=MRpz3q-m43U",
        content: `
<h3>Basic Probability</h3>
<p>Probability measures the likelihood of an event occurring:</p>
<pre><code>P(A) = Number of favourable outcomes / Total outcomes
P(A) always satisfies: 0 ≤ P(A) ≤ 1</code></pre>
<ul>
  <li><strong>Certain event:</strong> P(A) = 1</li>
  <li><strong>Impossible event:</strong> P(A) = 0</li>
  <li><strong>Complementary:</strong> P(A') = 1 − P(A)</li>
</ul>

<h3>Addition Theorem</h3>
<p>P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</p>
<p>If A and B are mutually exclusive: P(A ∪ B) = P(A) + P(B)</p>

<h3>Conditional Probability & Multiplication Theorem</h3>
<p>P(A|B) = P(A ∩ B) / P(B) → Probability of A given B has occurred</p>
<p>P(A ∩ B) = P(A) · P(B|A)</p>
<div class="callout callout-tip">✅ <div>Independent events: P(A ∩ B) = P(A) · P(B)</div></div>

<h3>Measures of Central Tendency</h3>
<ul>
  <li><strong>Mean:</strong> Sum of all values / Number of values</li>
  <li><strong>Median:</strong> Middle value when arranged in order</li>
  <li><strong>Mode:</strong> Most frequently occurring value</li>
</ul>

<h3>Standard Deviation & Variance</h3>
<pre><code>Variance  = Σ(xᵢ − x̄)² / n
Std Dev   = √Variance</code></pre>
<div class="callout callout-warn">⚠️ <div>Low SD → data is clustered near the mean. High SD → data is spread out.</div></div>`
      },
      {
        id: 6, title: "Set Theory & Logic",
        video: "https://www.youtube.com/watch?v=tyDKRwZvkjQ",
        content: `
<h3>What is a Set?</h3>
<p>A set is a well-defined collection of distinct objects, called elements.</p>
<ul>
  <li>A = {1, 2, 3, 4} — Roster/Tabular form</li>
  <li>A = {x : x is a natural number less than 5} — Set-builder form</li>
</ul>

<h3>Set Operations</h3>
<ul>
  <li><strong>Union (A ∪ B):</strong> All elements in A or B (or both)</li>
  <li><strong>Intersection (A ∩ B):</strong> Elements common to both A and B</li>
  <li><strong>Difference (A − B):</strong> Elements in A but not in B</li>
  <li><strong>Complement (A'):</strong> Elements in Universal set but not in A</li>
  <li><strong>Cartesian Product (A × B):</strong> All ordered pairs (a, b) where a ∈ A, b ∈ B</li>
</ul>

<h3>De Morgan's Laws</h3>
<pre><code>(A ∪ B)' = A' ∩ B'
(A ∩ B)' = A' ∪ B'</code></pre>

<h3>Logic — Truth Tables</h3>
<ul>
  <li><strong>AND (∧):</strong> True only when both inputs are True</li>
  <li><strong>OR (∨):</strong> True when at least one input is True</li>
  <li><strong>NOT (¬):</strong> Inverts the truth value</li>
  <li><strong>NAND:</strong> NOT AND — False only when both are True</li>
  <li><strong>NOR:</strong> NOT OR — True only when both are False</li>
</ul>
<div class="callout callout-key">💡 <div>Functions: A relation where every element of domain maps to exactly one element of range. Types: One-one (Injective), Onto (Surjective), One-one and Onto (Bijective).</div></div>`
      }
    ]
  },

  ml: {
    name: "Machine Learning", icon: "🤖",
    chapters: [
      {
        id: 1, title: "Introduction to Machine Learning",
        video: "https://www.youtube.com/watch?v=ukzFI9rgwfU",
        content: `
<h3>What is Machine Learning?</h3>
<p>Machine Learning is a subset of Artificial Intelligence that enables systems to <strong>learn from data</strong> and improve their performance without being explicitly programmed.</p>

<h3>Types of Machine Learning</h3>
<ul>
  <li><strong>Supervised Learning:</strong> Model is trained on labeled data (input-output pairs). Example: spam detection, house price prediction.</li>
  <li><strong>Unsupervised Learning:</strong> Model finds patterns in unlabeled data. Example: customer segmentation, topic modeling.</li>
  <li><strong>Reinforcement Learning:</strong> An agent learns by interacting with an environment and receiving rewards/penalties. Example: game playing AI, robots.</li>
</ul>
<div class="callout callout-key">💡 <div>Supervised = has labels | Unsupervised = no labels | Reinforcement = reward-based</div></div>

<h3>Key Terminology</h3>
<ul>
  <li><strong>Feature:</strong> Input variable (independent variable) used for prediction</li>
  <li><strong>Label/Target:</strong> Output variable we want to predict</li>
  <li><strong>Model:</strong> Mathematical function learned from training data</li>
  <li><strong>Training Set:</strong> Data used to train the model (~70–80%)</li>
  <li><strong>Test Set:</strong> Data used to evaluate the model (~20–30%)</li>
</ul>

<h3>Overfitting vs Underfitting</h3>
<ul>
  <li><strong>Overfitting:</strong> Model performs very well on training data but poorly on new data. (Too complex)</li>
  <li><strong>Underfitting:</strong> Model performs poorly on both training and test data. (Too simple)</li>
  <li><strong>Good Fit:</strong> Model generalizes well to new, unseen data.</li>
</ul>
<div class="callout callout-tip">✅ <div>Solutions to overfitting: more data, regularization (L1/L2), cross-validation, dropout (neural nets).</div></div>`
      },
      {
        id: 2, title: "Regression Algorithms",
        video: "https://www.youtube.com/watch?v=zPG4NjIkCjc",
        content: `
<h3>Linear Regression</h3>
<p>Predicts a continuous output based on one or more input features. The relationship between input (x) and output (y) is modeled as a straight line:</p>
<pre><code>y = mx + b
where:
  y = predicted value
  x = input feature
  m = slope (weight)
  b = intercept (bias)</code></pre>

<h3>Cost Function — Mean Squared Error (MSE)</h3>
<p>Measures how far predictions are from actual values:</p>
<pre><code>MSE = (1/n) Σ(yᵢ − ŷᵢ)²</code></pre>
<p>Goal: Minimize MSE by finding the best values of m and b.</p>

<h3>Gradient Descent</h3>
<p>An optimization algorithm that iteratively adjusts parameters to minimize the cost function:</p>
<pre><code>m = m − α · (∂MSE/∂m)
b = b − α · (∂MSE/∂b)
where α = learning rate</code></pre>
<div class="callout callout-warn">⚠️ <div>Learning rate too high → overshoots minimum. Too low → converges slowly. Choose wisely!</div></div>

<h3>Types of Regression</h3>
<ul>
  <li><strong>Simple Linear Regression:</strong> One feature → one output</li>
  <li><strong>Multiple Linear Regression:</strong> Multiple features → one output</li>
  <li><strong>Polynomial Regression:</strong> Fits a curved (non-linear) relationship</li>
  <li><strong>Ridge Regression (L2):</strong> Adds penalty = λΣm² to reduce overfitting</li>
  <li><strong>Lasso Regression (L1):</strong> Adds penalty = λΣ|m| — can reduce some weights to zero (feature selection)</li>
</ul>`
      },
      {
        id: 3, title: "Classification Algorithms",
        video: "https://www.youtube.com/watch?v=yIYKR4sgzI8",
        content: `
<h3>Logistic Regression</h3>
<p>Used for binary classification (Yes/No, 0/1). Uses the Sigmoid function to output probabilities:</p>
<pre><code>σ(z) = 1 / (1 + e⁻ᶻ)   where z = mx + b
Output: 0 to 1 (interpreted as probability)
If output ≥ 0.5 → Class 1, else → Class 0</code></pre>

<h3>K-Nearest Neighbours (KNN)</h3>
<p>A simple, non-parametric algorithm that classifies a data point based on the majority class of its K nearest neighbours (using distance metrics like Euclidean distance).</p>
<ul>
  <li>Small K → overfitting (too sensitive to noise)</li>
  <li>Large K → underfitting (too generalized)</li>
  <li>Best K is found using cross-validation</li>
</ul>

<h3>Decision Trees</h3>
<p>A tree-like model that splits data based on feature conditions. At each node, the feature that gives the best split is chosen using:</p>
<ul>
  <li><strong>Gini Impurity:</strong> G = 1 − Σpᵢ² (lower = purer)</li>
  <li><strong>Information Gain (Entropy):</strong> Reduction in entropy after a split</li>
</ul>

<h3>Support Vector Machine (SVM)</h3>
<p>Finds the optimal hyperplane that maximally separates two classes. The margin (distance between hyperplane and nearest points) is maximized.</p>
<div class="callout callout-key">💡 <div>Support Vectors = the data points closest to the hyperplane that define it.</div></div>

<h3>Naive Bayes</h3>
<p>Based on Bayes' theorem with the "naive" assumption that all features are independent of each other:</p>
<pre><code>P(class | features) ∝ P(class) × P(features | class)</code></pre>`
      },
      {
        id: 4, title: "Clustering & Unsupervised Learning",
        video: "https://www.youtube.com/watch?v=4b5d3muPQmA",
        content: `
<h3>K-Means Clustering</h3>
<p>Groups data into K clusters by minimizing the distance between data points and their cluster center (centroid).</p>
<p><strong>Steps:</strong></p>
<ol>
  <li>Choose K (number of clusters)</li>
  <li>Randomly initialize K centroids</li>
  <li>Assign each point to the nearest centroid</li>
  <li>Recalculate centroids as mean of each cluster</li>
  <li>Repeat steps 3–4 until centroids stop changing</li>
</ol>
<div class="callout callout-warn">⚠️ <div>K-Means is sensitive to initial centroid placement and outliers. Use K-Means++ for better initialization.</div></div>

<h3>Choosing K — Elbow Method</h3>
<p>Plot WCSS (Within-Cluster Sum of Squares) vs K. The "elbow point" where WCSS stops decreasing rapidly is the optimal K.</p>

<h3>PCA — Principal Component Analysis</h3>
<p>A dimensionality reduction technique that transforms high-dimensional data into fewer dimensions (principal components) while retaining maximum variance.</p>
<ul>
  <li>PCA finds directions (components) of maximum variance</li>
  <li>Components are orthogonal (uncorrelated)</li>
  <li>Used for visualization (reduce to 2D/3D) and to speed up ML algorithms</li>
</ul>
<div class="callout callout-key">💡 <div>PCA does not reduce data loss — it minimizes it by keeping the most important components.</div></div>

<h3>Hierarchical Clustering</h3>
<ul>
  <li><strong>Agglomerative (bottom-up):</strong> Start with each point as its own cluster, merge closest clusters step by step</li>
  <li><strong>Divisive (top-down):</strong> Start with all points in one cluster, split recursively</li>
  <li>Result visualized as a <strong>Dendrogram</strong> — cut the dendrogram at a level to get K clusters</li>
</ul>`
      },
      {
        id: 5, title: "Model Evaluation & Neural Networks",
        video: "https://www.youtube.com/watch?v=aircAruvnKk",
        content: `
<h3>Confusion Matrix</h3>
<p>A table used to evaluate classification model performance:</p>
<pre><code>                 Predicted Positive  Predicted Negative
Actual Positive:       TP                  FN
Actual Negative:       FP                  TN</code></pre>
<ul>
  <li><strong>Accuracy</strong>  = (TP + TN) / Total</li>
  <li><strong>Precision</strong> = TP / (TP + FP) — of predicted positives, how many are correct?</li>
  <li><strong>Recall</strong>    = TP / (TP + FN) — of actual positives, how many were found?</li>
  <li><strong>F1 Score</strong>  = 2 × (Precision × Recall) / (Precision + Recall)</li>
</ul>
<div class="callout callout-tip">✅ <div>Use F1 Score when data is imbalanced (unequal classes).</div></div>

<h3>K-Fold Cross-Validation</h3>
<p>Technique to evaluate model performance more reliably:</p>
<ol>
  <li>Split data into K equal folds</li>
  <li>Train on K−1 folds, test on the remaining fold</li>
  <li>Repeat K times, each fold used as test once</li>
  <li>Final score = average of all K scores</li>
</ol>

<h3>Neural Networks — Basics</h3>
<ul>
  <li><strong>Input Layer:</strong> Receives input features</li>
  <li><strong>Hidden Layers:</strong> Extract patterns; each neuron applies weights + activation function</li>
  <li><strong>Output Layer:</strong> Produces final prediction</li>
  <li><strong>Activation Functions:</strong> ReLU, Sigmoid, Tanh, Softmax</li>
</ul>

<h3>Backpropagation</h3>
<p>Algorithm that updates weights by propagating the error backwards through the network using the chain rule of calculus. This is how neural networks "learn".</p>
<div class="callout callout-key">💡 <div>Epoch = one complete pass through the entire training dataset. More epochs = more learning (up to a point).</div></div>`
      }
    ]
  },

  java: {
    name: "Java Programming", icon: "☕",
    chapters: [
      {
        id: 1, title: "Java Basics & Fundamentals",
        video: "https://www.youtube.com/watch?v=eIrMbAQSU34",
        content: `
<h3>What is Java?</h3>
<p>Java is a high-level, object-oriented, platform-independent programming language developed by <strong>Sun Microsystems</strong> in 1995.</p>
<p><strong>Key features:</strong> Platform Independent, Object-Oriented, Robust, Secure, Multithreaded, Portable, High Performance.</p>

<h3>JDK, JRE, and JVM</h3>
<ul>
  <li><strong>JVM (Java Virtual Machine):</strong> Executes Java bytecode. Makes Java platform-independent — "Write Once, Run Anywhere".</li>
  <li><strong>JRE (Java Runtime Environment):</strong> JVM + standard libraries. Needed to run Java programs.</li>
  <li><strong>JDK (Java Development Kit):</strong> JRE + compiler (javac) + tools. Needed to develop Java programs.</li>
</ul>
<div class="callout callout-key">💡 <div>Java source (.java) → Compiler (javac) → Bytecode (.class) → JVM → Machine Code</div></div>

<h3>Primitive Data Types</h3>
<pre><code>byte    → 1 byte  → -128 to 127
short   → 2 bytes → -32768 to 32767
int     → 4 bytes → ~2 billion
long    → 8 bytes → very large numbers
float   → 4 bytes → decimal (~7 digits precision)
double  → 8 bytes → decimal (~15 digits precision)
char    → 2 bytes → single character
boolean → 1 bit  → true / false</code></pre>

<h3>First Java Program</h3>
<pre><code>public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}</code></pre>
<div class="callout callout-tip">✅ <div>Java is case-sensitive. Class name must match the filename exactly.</div></div>`
      },
      {
        id: 2, title: "Object-Oriented Programming (OOP)",
        video: "https://www.youtube.com/watch?v=a199KZGMNxk",
        content: `
<h3>4 Pillars of OOP</h3>
<ul>
  <li><strong>Encapsulation:</strong> Wrapping data (variables) and code (methods) together inside a class. Use private fields with public getters/setters.</li>
  <li><strong>Inheritance:</strong> A class (child) acquires properties of another class (parent) using <code>extends</code>.</li>
  <li><strong>Polymorphism:</strong> One interface, multiple forms. Achieved via method overloading and overriding.</li>
  <li><strong>Abstraction:</strong> Hiding implementation details, showing only necessary features. Achieved via abstract classes and interfaces.</li>
</ul>

<h3>Method Overloading vs Overriding</h3>
<pre><code>// Overloading — same name, different parameters (Compile-time)
void add(int a, int b)    { }
void add(double a, double b) { }

// Overriding — child class redefines parent method (Runtime)
class Animal { void sound() { System.out.println("..."); } }
class Dog extends Animal {
    @Override
    void sound() { System.out.println("Woof"); }
}</code></pre>

<h3>this and super Keywords</h3>
<ul>
  <li><code>this</code> — refers to the current class object. Used to avoid ambiguity between instance and local variables.</li>
  <li><code>super</code> — refers to the parent class. Used to call parent constructor or methods.</li>
</ul>

<h3>Constructors</h3>
<pre><code>class Student {
    String name;
    int age;
    // Parameterized Constructor
    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}</code></pre>
<div class="callout callout-warn">⚠️ <div>Constructors have no return type. They are called automatically when an object is created using <code>new</code>.</div></div>`
      },
      {
        id: 3, title: "Interfaces & Abstract Classes",
        video: "https://www.youtube.com/watch?v=v12JmHkE_sM",
        content: `
<h3>Abstract Class</h3>
<p>A class declared with <code>abstract</code> keyword. Cannot be instantiated directly. Can have abstract (no body) and concrete (has body) methods.</p>
<pre><code>abstract class Shape {
    abstract double area(); // must be overridden
    void display() { System.out.println("Shape"); } // concrete
}
class Circle extends Shape {
    double r;
    Circle(double r) { this.r = r; }
    double area() { return Math.PI * r * r; }
}</code></pre>

<h3>Interface</h3>
<p>A blueprint of a class. All methods are abstract by default (Java 7). A class <code>implements</code> an interface.</p>
<pre><code>interface Drawable {
    void draw(); // public abstract by default
}
class Rectangle implements Drawable {
    public void draw() { System.out.println("Drawing Rectangle"); }
}</code></pre>
<div class="callout callout-key">💡 <div>Key Difference: Abstract class = partial abstraction. Interface = 100% abstraction (before Java 8). A class can implement multiple interfaces but extend only one class.</div></div>

<h3>Access Modifiers</h3>
<pre><code>private   → Only within the same class
default   → Within the same package
protected → Same package + subclasses
public    → Everywhere</code></pre>

<h3>static and final</h3>
<ul>
  <li><code>static</code> — belongs to the class, not to any instance. Shared by all objects.</li>
  <li><code>final</code> — variable: constant value | method: cannot override | class: cannot extend</li>
</ul>`
      },
      {
        id: 4, title: "Exception Handling",
        video: "https://www.youtube.com/watch?v=1XAfapoCRgQ",
        content: `
<h3>What is an Exception?</h3>
<p>An exception is an unwanted event that disrupts normal program flow during execution. Exception handling allows programs to handle errors gracefully without crashing.</p>

<h3>try-catch-finally</h3>
<pre><code>try {
    int result = 10 / 0; // throws ArithmeticException
} catch (ArithmeticException e) {
    System.out.println("Error: " + e.getMessage());
} finally {
    System.out.println("This always executes.");
}</code></pre>

<h3>throw vs throws</h3>
<ul>
  <li><code>throw</code> — explicitly throws an exception inside a method</li>
  <li><code>throws</code> — declares that a method might throw exceptions (in method signature)</li>
</ul>
<pre><code>void checkAge(int age) throws Exception {
    if (age &lt; 18) throw new Exception("Too young!");
}</code></pre>

<h3>Checked vs Unchecked Exceptions</h3>
<ul>
  <li><strong>Checked:</strong> Must be handled at compile time. Example: IOException, SQLException, FileNotFoundException</li>
  <li><strong>Unchecked:</strong> Occur at runtime. Example: ArithmeticException, NullPointerException, ArrayIndexOutOfBoundsException</li>
</ul>

<h3>Custom Exception</h3>
<pre><code>class AgeException extends Exception {
    AgeException(String msg) { super(msg); }
}
// Usage:
throw new AgeException("Age must be 18+");</code></pre>
<div class="callout callout-tip">✅ <div>The <code>finally</code> block always executes — even if an exception is thrown or not caught. Use it for cleanup (closing files, DB connections).</div></div>`
      },
      {
        id: 5, title: "Collections Framework",
        video: "https://www.youtube.com/watch?v=viTHG_4A5TQ",
        content: `
<h3>Java Collections Framework</h3>
<p>A unified architecture for storing and manipulating groups of objects. Key interfaces:</p>
<ul>
  <li><strong>Collection</strong> → List, Set, Queue</li>
  <li><strong>Map</strong> (key-value pairs) → HashMap, TreeMap</li>
</ul>

<h3>List Implementations</h3>
<ul>
  <li><strong>ArrayList:</strong> Dynamic array. Fast random access (O(1)). Slow insert/delete in middle.</li>
  <li><strong>LinkedList:</strong> Doubly linked list. Fast insert/delete (O(1)). Slow random access.</li>
  <li><strong>Vector:</strong> Synchronized ArrayList (thread-safe but slower).</li>
</ul>
<pre><code>ArrayList&lt;String&gt; list = new ArrayList&lt;&gt;();
list.add("Java"); list.add("Python");
list.get(0);      // Quick access
list.remove(1);   // Remove by index</code></pre>

<h3>Map Implementations</h3>
<ul>
  <li><strong>HashMap:</strong> Key-value pairs, unordered, allows null key, not thread-safe.</li>
  <li><strong>LinkedHashMap:</strong> Maintains insertion order.</li>
  <li><strong>TreeMap:</strong> Sorted by key (natural or custom order).</li>
  <li><strong>Hashtable:</strong> Synchronized, no null keys/values (legacy).</li>
</ul>

<h3>Iterating Collections</h3>
<pre><code>// for-each loop
for (String s : list) { System.out.println(s); }

// Iterator
Iterator&lt;String&gt; it = list.iterator();
while (it.hasNext()) { System.out.println(it.next()); }</code></pre>
<div class="callout callout-key">💡 <div>Use <code>HashMap</code> for fast lookups. Use <code>TreeMap</code> when you need sorted keys. Use <code>LinkedHashMap</code> for insertion-order iteration.</div></div>`
      },
      {
        id: 6, title: "Multithreading & File I/O",
        video: "https://www.youtube.com/watch?v=TCjd8y2B6N0",
        content: `
<h3>Thread Life Cycle</h3>
<ul>
  <li><strong>New:</strong> Thread object created but not started</li>
  <li><strong>Runnable:</strong> After calling start(), ready to run</li>
  <li><strong>Running:</strong> Thread is executing</li>
  <li><strong>Blocked/Waiting:</strong> Waiting for a resource or another thread</li>
  <li><strong>Terminated/Dead:</strong> Thread execution completed</li>
</ul>

<h3>Creating Threads</h3>
<pre><code>// Method 1: Extend Thread class
class MyThread extends Thread {
    public void run() { System.out.println("Thread running"); }
}
new MyThread().start();

// Method 2: Implement Runnable (preferred)
class MyRunnable implements Runnable {
    public void run() { System.out.println("Runnable running"); }
}
new Thread(new MyRunnable()).start();</code></pre>
<div class="callout callout-tip">✅ <div>Prefer <code>Runnable</code> over extending <code>Thread</code> — your class can still extend another class (Java allows single inheritance only).</div></div>

<h3>Synchronization</h3>
<p>Used to prevent race conditions when multiple threads access shared data:</p>
<pre><code>synchronized void deposit(int amount) {
    balance += amount; // only one thread at a time
}</code></pre>

<h3>File I/O</h3>
<pre><code>// Writing to file
FileWriter fw = new FileWriter("notes.txt");
fw.write("Hello File!");
fw.close();

// Reading from file
FileReader fr = new FileReader("notes.txt");
BufferedReader br = new BufferedReader(fr);
String line;
while ((line = br.readLine()) != null)
    System.out.println(line);
br.close();</code></pre>`
      }
    ]
  },

  python: {
    name: "Python Programming", icon: "🐍",
    chapters: [
      {
        id: 1, title: "Python Basics",
        video: "https://www.youtube.com/watch?v=kqtD5dpn9C8",
        content: `
<h3>What is Python?</h3>
<p>Python is a high-level, interpreted, dynamically-typed programming language known for its simple, readable syntax. Created by <strong>Guido van Rossum</strong> in 1991.</p>
<p><strong>Key features:</strong> Easy to learn, Interpreted, Dynamically typed, Extensive libraries, Cross-platform, Open source.</p>

<h3>Data Types</h3>
<pre><code>x = 10          # int
y = 3.14        # float
name = "Alice"  # str
flag = True     # bool
lst  = [1,2,3]  # list (mutable, ordered)
tup  = (1,2,3)  # tuple (immutable, ordered)
st   = {1,2,3}  # set (unordered, unique)
d    = {"a":1}  # dict (key-value pairs)</code></pre>

<h3>Type Checking & Conversion</h3>
<pre><code>type(x)         # Returns data type
int("42")       # str → int: 42
str(3.14)       # float → str: "3.14"
float("3.14")   # str → float: 3.14
list((1,2,3))   # tuple → list</code></pre>

<h3>Input & Output</h3>
<pre><code>name = input("Enter your name: ")   # Always returns string
age  = int(input("Enter age: "))     # Convert to int
print(f"Hello {name}, you are {age} years old.")  # f-string</code></pre>
<div class="callout callout-key">💡 <div>Python uses indentation (spaces/tabs) to define code blocks — no curly braces! Consistent indentation is mandatory.</div></div>
<div class="callout callout-tip">✅ <div>Swap variables: <code>a, b = b, a</code> — no temporary variable needed!</div></div>`
      },
      {
        id: 2, title: "Control Flow & Loops",
        video: "https://www.youtube.com/watch?v=PqFKRqpHrjw",
        content: `
<h3>if-elif-else</h3>
<pre><code>marks = int(input("Enter marks: "))
if marks >= 90:
    print("Grade A")
elif marks >= 75:
    print("Grade B")
elif marks >= 60:
    print("Grade C")
else:
    print("Fail")</code></pre>

<h3>Loops</h3>
<pre><code># for loop — iterates over a sequence
for i in range(1, 6):   # 1 to 5
    print(i)

# while loop — runs while condition is True
n = 1
while n <= 5:
    print(n)
    n += 1</code></pre>

<h3>Loop Control Statements</h3>
<ul>
  <li><code>break</code> — exits the loop immediately</li>
  <li><code>continue</code> — skips the current iteration, goes to next</li>
  <li><code>pass</code> — does nothing (placeholder)</li>
</ul>
<pre><code>for i in range(10):
    if i == 5: break      # stops at 5
    if i % 2 == 0: continue  # skip even numbers
    print(i)  # prints: 1, 3</code></pre>

<h3>List Comprehension</h3>
<p>A concise way to create lists:</p>
<pre><code># Traditional
squares = []
for i in range(1, 6):
    squares.append(i**2)

# List Comprehension (same result, one line)
squares = [i**2 for i in range(1, 6)]
# → [1, 4, 9, 16, 25]

# With condition
evens = [i for i in range(20) if i % 2 == 0]</code></pre>
<div class="callout callout-tip">✅ <div>Fibonacci series: Start with 0, 1. Each next number = sum of previous two: 0, 1, 1, 2, 3, 5, 8, 13…</div></div>`
      },
      {
        id: 3, title: "Functions & Modules",
        video: "https://www.youtube.com/watch?v=9Os0o3wzS_I",
        content: `
<h3>Defining Functions</h3>
<pre><code>def greet(name, message="Hello"):  # default argument
    return f"{message}, {name}!"

print(greet("Alice"))           # Hello, Alice!
print(greet("Bob", "Hi"))       # Hi, Bob!</code></pre>

<h3>*args and **kwargs</h3>
<pre><code>def total(*args):         # accepts any number of positional args
    return sum(args)
total(1, 2, 3, 4)        # → 10

def info(**kwargs):       # accepts any number of keyword args
    for k, v in kwargs.items():
        print(f"{k}: {v}")
info(name="Alice", age=21)</code></pre>

<h3>Lambda Functions</h3>
<p>Anonymous (nameless) one-line functions:</p>
<pre><code>square = lambda x: x**2
print(square(5))         # → 25

# With map, filter, reduce
nums = [1, 2, 3, 4, 5]
doubled  = list(map(lambda x: x*2, nums))    # [2,4,6,8,10]
evens    = list(filter(lambda x: x%2==0, nums))  # [2,4]</code></pre>

<h3>Recursion</h3>
<pre><code>def factorial(n):
    if n == 0 or n == 1:  # base case
        return 1
    return n * factorial(n - 1)  # recursive call
print(factorial(5))  # → 120</code></pre>

<h3>Modules</h3>
<pre><code>import math
print(math.sqrt(16))     # 4.0
print(math.pi)           # 3.14159...

from math import sqrt    # import specific function
print(sqrt(25))          # 5.0

import numpy as np       # alias</code></pre>
<div class="callout callout-key">💡 <div>LEGB Rule (variable scope): Local → Enclosing → Global → Built-in</div></div>`
      },
      {
        id: 4, title: "OOP in Python & File Handling",
        video: "https://www.youtube.com/watch?v=JeznW_7DlB0",
        content: `
<h3>Classes and Objects</h3>
<pre><code>class Student:
    def __init__(self, name, age):  # constructor
        self.name = name   # instance variable
        self.age = age

    def greet(self):
        return f"Hi, I am {self.name}"

s1 = Student("Alice", 20)
print(s1.greet())  # Hi, I am Alice</code></pre>
<div class="callout callout-key">💡 <div><code>self</code> refers to the current object instance (like <code>this</code> in Java). Always the first parameter in instance methods.</div></div>

<h3>Inheritance</h3>
<pre><code>class Animal:
    def speak(self): return "..."

class Dog(Animal):          # inherits from Animal
    def speak(self): return "Woof!"

class Cat(Animal):
    def speak(self): return "Meow!"

# Multiple Inheritance
class C(A, B): pass

# super() — call parent class method
class Dog(Animal):
    def __init__(self, name):
        super().__init__(name)  # calls Animal's __init__</code></pre>

<h3>File Handling</h3>
<pre><code># Writing
with open("file.txt", "w") as f:
    f.write("Hello, file!")

# Reading
with open("file.txt", "r") as f:
    content = f.read()
    print(content)

# Append
with open("file.txt", "a") as f:
    f.write("\nNew line")</code></pre>
<p>File modes: <code>r</code>=read, <code>w</code>=write (overwrite), <code>a</code>=append, <code>rb/wb</code>=binary</p>
<div class="callout callout-tip">✅ <div>Always use <code>with open(...)</code> — it automatically closes the file, even if an exception occurs.</div></div>`
      },
      {
        id: 5, title: "Python Libraries & Exception Handling",
        video: "https://www.youtube.com/watch?v=N_WJhFkH7OE",
        content: `
<h3>Exception Handling</h3>
<pre><code>try:
    num = int(input("Enter number: "))
    result = 10 / num
except ValueError:
    print("Not a valid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
else:
    print(f"Result: {result}")     # runs if no exception
finally:
    print("Done.")                 # always runs</code></pre>

<h3>Custom Exception</h3>
<pre><code>class AgeError(Exception):
    def __init__(self, msg): super().__init__(msg)

raise AgeError("Age must be 18+")</code></pre>

<h3>NumPy</h3>
<pre><code>import numpy as np
arr = np.array([1, 2, 3, 4, 5])
print(arr * 2)           # [2 4 6 8 10]
print(arr.mean())        # 3.0
print(arr[1:4])          # [2 3 4] (slicing)
mat = np.zeros((3, 3))   # 3x3 matrix of zeros</code></pre>

<h3>Pandas</h3>
<pre><code>import pandas as pd
df = pd.DataFrame({
    "Name": ["Alice", "Bob", "Charlie"],
    "Marks": [85, 90, 78]
})
print(df.head())         # first 5 rows
print(df.describe())     # statistics
print(df["Marks"].mean())  # 84.33</code></pre>

<h3>Matplotlib</h3>
<pre><code>import matplotlib.pyplot as plt
x = [1, 2, 3, 4, 5]
y = [10, 20, 15, 30, 25]

plt.plot(x, y, marker='o')    # line chart
plt.title("Student Marks")
plt.xlabel("Student"); plt.ylabel("Marks")
plt.show()

plt.bar(x, y, color='steelblue')  # bar chart
plt.show()</code></pre>
<div class="callout callout-key">💡 <div>Virtual Environments: <code>python -m venv env</code> then <code>env\Scripts\activate</code> (Windows). Isolates project dependencies.</div></div>`
      }
    ]
  }
};
