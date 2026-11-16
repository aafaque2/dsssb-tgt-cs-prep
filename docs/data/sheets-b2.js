/* Cheat sheets, written for this site (part 2 of 3: Section B, "if time permits" topics).
   Lower frequency per paper than part 1, but several are quick wins. */
(window.DSSSB_SHEETS = window.DSSSB_SHEETS || []).push(
{
id: "itfund", part: "B", rank: 9, tier: "later", topics: ["IT fundamentals & applications"],
title: "IT fundamentals & applications",
freq: "≈ 5 questions per DoE paper; quick wins",
must: `
<ul><li>Generations: 1st vacuum tubes (ENIAC, UNIVAC) · 2nd transistors · 3rd integrated circuits · 4th microprocessors/VLSI · 5th AI, ULSI, parallel processing.</li>
<li>Units: nibble 4 bits, byte 8, KB = 1024 B → MB → GB → TB → PB → EB → ZB → YB. Time: ms 10⁻³, µs 10⁻⁶, ns 10⁻⁹, ps 10⁻¹² s.</li>
<li>RAM is volatile: SRAM (flip-flops, fast, cache) vs DRAM (capacitors, needs refresh, main memory). ROM is non-volatile: PROM (write once), <b>EPROM</b> (erased by UV light) <span class="y">2025</span>, EEPROM (erased electrically), flash.</li>
<li>Secondary storage: HDD, SSD, CD (≈ 700 MB), DVD (4.7 GB), Blu-ray (25 GB), <b>magnetic tape = sequential access only</b> <span class="y">2023</span>.</li>
<li>Input: keyboard, mouse, scanner, light pen, joystick, MICR (cheques), OCR, OMR (answer sheets), barcode reader, digitiser. Output: monitor/<b>VDU</b> <span class="y">2023</span>, printers (impact: dot-matrix, line; non-impact: laser, inkjet), plotter, speaker. Touchscreen = both.</li>
<li>System software (OS, utilities, drivers, translators) vs application software. <b>System software</b> provides the instructions that run the computer itself <span class="y">2023</span>. Open source: Linux, LibreOffice, <b>GIMP</b> <span class="y">2025</span>, Firefox, VLC. Also freeware, shareware, proprietary. A <b>software package</b> = programs + documentation <span class="y">2023</span>.</li>
<li>Shortcuts: Ctrl+C/X/V/Z/Y/A/S/P/F/H; Ctrl+B/I/U; Ctrl+E/L/R/J (centre/left/right/justify); Ctrl+K hyperlink; F7 spelling; F12 save as; Shift+F3 change case (Word); F5 slide show (PowerPoint); Excel formulas start with =, <code>$A$1</code> is absolute, 1,048,576 rows × 16,384 columns.</li>
<li>Email: CC is visible, BCC hidden; emoji via the editor's emoji icon <span class="y">2025</span>; <code>:-)</code> = happy <span class="y">2025</span>. A browser displays and navigates web pages <span class="y">2025</span>.</li>
<li>Founders: WhatsApp – Jan Koum &amp; Brian Acton <span class="y">2025</span>; Google – Page &amp; Brin; Microsoft – Gates &amp; Allen; Apple – Jobs &amp; Wozniak; Facebook – Zuckerberg; Linux – Linus Torvalds; C – Dennis Ritchie; C++ – Bjarne Stroustrup; Java – James Gosling; Python – Guido van Rossum; WWW – Tim Berners-Lee.</li></ul>`,
probable: `<ul>
<li>Memory type from a property; input vs output device; sequential vs direct access.</li>
<li>Open-source example; software categories; office shortcuts.</li>
<li>Founders and inventors; unit conversions; generation features.</li></ul>`,
later: `<ul>
<li>Cloud: IaaS, PaaS, SaaS; IoT; AI/ML; big data (Hadoop); blockchain; AR/VR.</li>
<li>Cyber ethics: copyright (creative work), patent (invention), trademark (brand); plagiarism; digital footprint; e-waste; IT Act 2000 (amended 2008).</li>
<li>Ports and cables: USB, HDMI, VGA, RJ-45. Common full forms (ALU, BIOS, CMOS, GUI, OCR, OMR, MICR, URL, ISP, PDF).</li></ul>`
},
{
id: "maths", part: "B", rank: 10, tier: "later", topics: ["Maths & statistics"],
title: "Maths & statistics",
freq: "≈ 5 questions per DoE paper (2025 had 3 on differential equations)",
must: `
<h4>Probability and statistics</h4>
<ul><li>Classical probability (Laplace) <span class="y">2023</span>: P(E) = favourable ÷ total equally likely outcomes. P(A') = 1 − P(A); P(A ∪ B) = P(A) + P(B) − P(A ∩ B); P(A | B) = P(A ∩ B) ÷ P(B); independent ⇔ P(A ∩ B) = P(A)·P(B); Bayes' theorem.</li>
<li>Discrete: binomial (mean np, variance npq), <b>Poisson</b> (mean = variance = λ) <span class="y">2023</span>. Continuous: normal/Gaussian (mean = median = mode), uniform, exponential, Rayleigh.</li>
<li>Chi-square test of independence on an r × c table: (r − 1)(c − 1) degrees of freedom, so a 2 × 2 table has 1 <span class="y">2025</span>.</li>
<li>Mode ≈ 3 median − 2 mean; SD = √variance; coefficient of variation = SD ÷ mean × 100.</li></ul>
<h4>Matrices</h4>
<ul><li>Characteristic equation |A − λI| = 0; for a 2 × 2 matrix: λ² − (trace)λ + det = 0, e.g. [[1, 4], [3, 5]] → λ² − 6λ − 7 = 0 <span class="y">2025</span>.</li>
<li>Sum of eigenvalues = trace; product = determinant. A⁻¹ exists iff det ≠ 0; (AB)ᵀ = BᵀAᵀ; (AB)⁻¹ = B⁻¹A⁻¹.</li></ul>
<h4>Differential equations</h4>
<ul><li>Solution y = ae<sup>m₁x</sup> + be<sup>m₂x</sup> ⇒ auxiliary equation (m − m₁)(m − m₂) = 0. Example: y = ae<sup>2x</sup> + be<sup>−x</sup> → y″ − y′ − 2y = 0 <span class="y">2025</span>.</li>
<li>Particular integral for e<sup>ax</sup>: if a is a root repeated k times, the PI has the form x<sup>k</sup>e<sup>ax</sup>. Example: (D² − 9)²y = e<sup>3x</sup> → x²e<sup>3x</sup> form <span class="y">2025</span>.</li></ul>
<h4>Series, calculus, interpolation</h4>
<ul><li>Geometric Σrⁿ converges iff |r| &lt; 1; p-series Σ1/nᵖ converges iff <b>p &gt; 1</b> (the harmonic series diverges); if the terms don't tend to 0, the series diverges.</li>
<li>∇φ is normal to the surface φ = c; unit normal = ∇φ ÷ |∇φ| <span class="y">2023</span>.</li>
<li>Interpolation: Newton forward/backward (equal spacing), Lagrange (any spacing); piecewise-constant (nearest neighbour), linear, polynomial, spline (smooth piecewise polynomials); Gaussian-process (kriging) is non-linear <span class="y">2023</span>.</li>
<li>nPr = n! ÷ (n − r)!; nCr = n! ÷ (r!(n − r)!).</li></ul>`,
probable: `<ul>
<li>Probability of a simple event (a die showing an even number = 1/2) <span class="y">2025</span>.</li>
<li>Discrete vs continuous distributions; mean and variance of binomial/Poisson.</li>
<li>Characteristic equation or eigenvalues of a small matrix.</li>
<li>ODE from its general solution; form of a particular integral.</li>
<li>Convergence of a series; unit normal to a surface.</li></ul>`,
later: `<ul>
<li>Numerical methods: bisection, Newton–Raphson x<sub>n+1</sub> = x<sub>n</sub> − f(x<sub>n</sub>) ÷ f′(x<sub>n</sub>), trapezoidal and Simpson's ⅓ rules.</li>
<li>Operations research (applied maths) <span class="y">2023</span>: linear programming (simplex), transportation, assignment (Hungarian method), queuing, game theory.</li>
<li>Laplace transforms, Fourier series; sets, relations and functions; propositional logic and truth tables.</li></ul>`
},
{
id: "web", part: "B", rank: 11, tier: "later", topics: ["Web technologies"],
title: "Web technologies",
freq: "≈ 4 questions per DoE paper; quick wins",
must: `
<ul><li><b>HTML</b>: &lt;!DOCTYPE html&gt;, &lt;head&gt; (title, meta, link, style, script), &lt;body&gt;; h1–h6, p, br and hr (empty), &lt;a href target="_blank"&gt;, &lt;img src alt&gt;; ul/ol/li and dl/dt/dd; table/tr/th/td with colspan/rowspan; &lt;form action method="get|post"&gt;, input types (text, password, radio, checkbox, submit, file), select/option, textarea, label. Block (div, p) vs inline (span, a, img). HTML5: header, nav, main, section, article, aside, footer, audio, video, canvas. Tags aren't case-sensitive.</li>
<li><b>CSS</b>: inline beats internal (&lt;style&gt;) beats external (&lt;link rel="stylesheet"&gt;); specificity: inline &gt; #id &gt; .class &gt; element. Box model: content → padding → border → margin. display: block, inline, inline-block, flex, grid, none; position: static, relative, absolute, fixed, sticky.</li>
<li><b>JavaScript</b>: var (function scope) vs let/const (block scope); == (loose) vs === (strict); typeof; alert, prompt, confirm, console.log, document.write (where '\\n' is just a space in HTML <span class="y">2023</span>).</li>
<li><b>DHTML/DOM</b>: <code>element.style.backgroundColor = "red"</code> changes style <span class="y">2025</span>; <code>window.resizeTo()</code> / resizeBy() size the window <span class="y">2025</span>; getElementById, innerHTML; events onclick, onload, onmouseover, onchange.</li>
<li><b>AJAX</b> exchanges small pieces of data in the background, updating part of a page without a reload, which saves bandwidth <span class="y">2025</span>.</li>
<li><b>HTTP</b> is stateless. GET (data in the URL) vs POST (data in the body), PUT, DELETE. Status: 200 OK, 301 moved, 304 not modified, 400 bad request, 401 unauthorised, 403 forbidden, 404 not found, 500 server error. Cookies and sessions keep state. HTTPS = HTTP over TLS (port 443).</li>
<li><b>XML</b>: user-defined, case-sensitive tags. Well-formed = one root, properly nested and closed tags, quoted attributes; valid = also obeys a DTD/XSD. An <b>XML processor</b> (parser: DOM tree or SAX events) reads the document <span class="y">2023</span>. DTD: <code>&lt;!ELEMENT note (to, from, body)&gt;</code>.</li>
<li>Server side: Apache, Nginx, IIS; <b>CGI</b> = standard interface between a web server and external programs (the 2023 key said HTTP); PHP, ASP.NET, JSP, Node.js. PHP sorts: sort/rsort by value, <b>asort</b>/arsort keep keys <span class="y">2025</span>, ksort/krsort by key.</li></ul>`,
probable: `<ul>
<li>Tag or attribute for a purpose; form methods.</li>
<li>Output of a short JavaScript snippet <span class="y">2025</span>; DOM/DHTML property or method.</li>
<li>AJAX advantage; HTTP method or status code; XML rules; PHP sort functions.</li>
<li>Web browsers are the universal front end of web database applications <span class="y">2023</span>.</li></ul>`,
later: `<ul>
<li>Web 1.0 (static), 2.0 (interactive, social), 3.0 (semantic). Static vs dynamic pages.</li>
<li>URL parts: protocol://domain:port/path?query#fragment. DNS and domain names (TLDs).</li>
<li>JSON vs XML; responsive design (media queries, viewport meta tag); iframes; SEO basics.</li></ul>`
},
{
id: "oop", part: "B", rank: 12, tier: "later", topics: ["Java", "OOP concepts", "Python", ".NET / C# / VB"],
title: "Java, OOP, Python & .NET",
freq: "≈ 4 questions per DoE paper together (Python was big only in the NDMC 2024 paper)",
must: `
<h4>OOP</h4>
<ul><li><b>Encapsulation</b> bundles data and methods and hides data <span class="y">2025</span>; abstraction shows only essentials; inheritance (single, multilevel, hierarchical, multiple – C++ only, Java via interfaces, hybrid); polymorphism: compile-time (overloading, incl. <b>operator overloading</b> <span class="y">2023</span>) and run-time (overriding).</li>
<li><code>obj.doActivity()</code> calls a method on an object <span class="y">2025</span>. <b>protected</b> members are visible in derived classes <span class="y">2023</span>.</li></ul>
<h4>Java</h4>
<ul><li>.java → javac → bytecode (.class) → JVM (platform independent). JDK ⊃ JRE ⊃ JVM. <code>static public void main(String... args)</code> is also valid <span class="y">2023</span>.</li>
<li>Sizes: byte 1, short 2, int 4, long 8, float 4, double 8, <b>char 2</b> (Unicode), boolean.</li>
<li>Access from least to most visible: private → default (package) → protected (package + subclasses) → public. The 2023 key put protected before package; see that question's note.</li>
<li><b>final</b>: constant variable, method can't be overridden <span class="y">2023</span>, class can't be extended. <b>abstract</b> classes can't be instantiated <span class="y">2023</span>. <b>Interfaces</b> allow default methods since Java 8 <span class="y">2023</span>. <b>super</b> refers to the parent class <span class="y">2025</span>; this = current object.</li>
<li>Exceptions: checked (IOException) vs unchecked (ArithmeticException, NullPointerException, ArrayIndexOutOfBoundsException). try → catch → <b>finally always runs</b>, inner finally before outer <span class="y">2025</span>; throw vs throws; custom exceptions extend Exception <span class="y">2025</span>.</li>
<li>String is immutable (StringBuilder mutable); == compares references, equals() compares content.</li></ul>
<h4>Python</h4>
<ul><li>list [ ] mutable · tuple ( ) immutable · dict {k: v} · set. Slicing s[a:b:c] excludes b; s[::-1] reverses; negative indices count from the end.</li>
<li>// floor division, ** power, % remainder; range(a, b, step) excludes b; input() returns a str; is (identity) vs == (equality).</li>
<li>Methods: append, extend, insert, pop, remove, sort; upper, lower, split, join, strip, find, replace. def, lambda, import.</li></ul>
<h4>.NET</h4>
<ul><li>CLR runs code (JIT, garbage collection, security); CTS = common types; CLS = interoperability rules; MSIL/CIL = intermediate code; assemblies (.exe/.dll; shared ones in the GAC).</li>
<li>Collections: ArrayList (by index), <b>Hashtable</b> / Dictionary (by unique key) <span class="y">2023</span>, List&lt;T&gt;, Stack, Queue, SortedList.</li>
<li>ADO.NET: Connection, Command, DataReader (connected, forward-only), DataSet (disconnected), DataAdapter.</li></ul>`,
probable: `<ul>
<li>Output of Java code with exceptions and finally blocks (two in 2025).</li>
<li>Definitions of OOP concepts; true/false about final, abstract, interfaces, main.</li>
<li>Access-modifier order; what super/this do.</li>
<li>Python slicing or list output (mostly NDMC); a .NET collection or CLR term.</li></ul>`,
later: `<ul>
<li>Java threads (extend Thread or implement Runnable; start() vs run(); synchronized); collections (ArrayList, LinkedList, HashMap, HashSet, TreeMap); wrapper classes and autoboxing; packages.</li>
<li>Python: list comprehensions, *args/**kwargs, generators (yield), try/except/else/finally, with open().</li>
<li>C#: value vs reference types, boxing/unboxing, properties, delegates and events, LINQ. ASP.NET state: ViewState, Session, Application, cookies.</li></ul>`
},
{
id: "coa", part: "B", rank: 13, tier: "later", topics: ["Computer organisation"],
title: "Computer organisation",
freq: "≈ 4 questions per DoE paper",
must: `
<ul><li>CPU = ALU + control unit + registers. The CU manages the <b>instruction cycle</b> <span class="y">2025</span>: fetch → decode → execute (→ store). 'Encode' is not a phase <span class="y">2025</span>.</li>
<li>Registers: PC (address of the next instruction), IR (current instruction), MAR (memory address), MDR/MBR (memory data), accumulator (ALU results), SP (stack top), flags (zero, carry, sign, overflow, parity).</li>
<li>Buses: address (one-way; n lines → 2ⁿ locations), data (two-way; word size), control. A bus is a <b>set of parallel lines</b> <span class="y">2023</span>.</li>
<li>Addressing modes: immediate (operand in the instruction), direct, indirect, register, register-indirect, indexed, relative (PC + offset), implied.</li>
<li><b>RISC</b>: few simple fixed-length instructions, load/store, many registers, hardwired control, easy pipelining, <b>most energy-efficient</b> (ARM) <span class="y">2023</span>. <b>CISC</b>: many complex variable-length instructions, microprogrammed control (x86). An ISA balances simplicity and performance <span class="y">2025</span>.</li>
<li>Pipelining overlaps stages (ideal speed-up ≈ number of stages); hazards: structural, data (RAW, WAR, WAW), control (branches).</li>
<li>Hierarchy: registers → cache (L1–L3) → RAM → disk. Cache relies on locality (temporal, spatial); mapping: direct, associative, set-associative; average access ≈ h·t<sub>cache</sub> + (1 − h)·t<sub>memory</sub>.</li>
<li>I/O: programmed (polling), interrupt-driven, <b>DMA</b> (device ↔ memory without the CPU). Interrupts: maskable vs non-maskable.</li>
<li>8085: 8-bit data, 16-bit address (64 KB). 8086: 16-bit data, 20-bit address (1 MB). The accumulator matches the word size (the 2023 key said 4 bytes).</li></ul>`,
probable: `<ul>
<li>Role of a register; phases of the instruction cycle.</li>
<li>RISC vs CISC; addressing mode from an example.</li>
<li>Cache, DMA, interrupt and virtual-memory definitions; memory size from address lines.</li></ul>`,
later: `<ul>
<li>Flynn: SISD, SIMD (vector/GPU), MISD, MIMD (multiprocessors). Hardwired vs microprogrammed control.</li>
<li>Instruction formats (0-, 1-, 2-, 3-address); Booth's multiplication; memory interleaving.</li>
<li>RAID 0 (striping), 1 (mirroring), 5 (striping with distributed parity).</li></ul>`
},
{
id: "se", part: "B", rank: 14, tier: "later", topics: ["Software engineering"],
title: "Software engineering",
freq: "≈ 3 questions per DoE paper",
must: `
<ul><li>SDLC: requirements (SRS) → design → coding → testing → deployment → maintenance.</li>
<li>Models: <b>waterfall/linear</b> (fixed requirements, so it can't handle changing ones <span class="y">2023</span>), V-model, incremental, prototyping (unclear requirements), <b>spiral</b> (Boehm; risk-driven), RAD, <b>agile</b> (Scrum sprints, XP pair programming; welcomes change).</li>
<li>Functional requirements (what the system does) vs non-functional (performance, security, usability).</li>
<li>Design order: <b>system → architectural → detailed</b> <span class="y">2023</span>. Aim for <b>low coupling, high cohesion</b> <span class="y">2023</span>. Coupling, best → worst: data, stamp, control, external, common, content. Cohesion, best → worst: functional, sequential, communicational, procedural, temporal, logical, coincidental.</li>
<li>Pressman: framework activities (communication, planning, modelling, construction, deployment) vs umbrella activities (tracking, risk management, quality assurance, configuration management).</li>
<li>Testing: unit → integration (top-down uses stubs, bottom-up uses drivers) → system → acceptance (alpha at the developer's site, beta at the user's). Black-box (equivalence partitioning, boundary values) vs white-box (statement/branch/path coverage). Regression testing after changes. Verification = built right; validation = right product.</li>
<li>Cyclomatic complexity V(G) = E − N + 2P = decisions + 1.</li>
<li>Maintenance: corrective, adaptive, perfective, preventive.</li>
<li><b>CMM</b> = Capability Maturity Model: 1 initial, 2 repeatable, 3 defined, 4 managed, 5 optimising.</li></ul>`,
probable: `<ul>
<li>Model for a scenario (changing requirements → agile/evolutionary; high risk → spiral).</li>
<li>Design order; coupling and cohesion; testing type; maintenance type; CMM.</li></ul>`,
later: `<ul>
<li>Estimation: COCOMO (organic, semi-detached, embedded), function points, LOC.</li>
<li>UML: use case, class, sequence, activity, state, component, deployment diagrams. DFD level 0 = context diagram; data dictionary.</li>
<li>Gantt and PERT/CPM charts (critical path); risk management; reverse engineering; CASE tools.</li></ul>`
},
{
id: "graphics", part: "B", rank: 15, tier: "later", topics: ["Graphics & multimedia"],
title: "Graphics & multimedia",
freq: "≈ 3 questions per DoE paper",
must: `
<ul><li>Raster (pixels; resolution-dependent) vs vector (shapes; scales without loss). Frame buffer = width × height × bits per pixel ÷ 8 bytes.</li>
<li>Lines: DDA (floating point) vs <b>Bresenham</b> (integers only, faster). Circles: midpoint algorithm with 8-way symmetry.</li>
<li>2-D transformations: translation, rotation, scaling, reflection, shear; homogeneous 3 × 3 matrices combine by multiplication (order matters). Animation = applying <b>transformations</b> frame by frame <span class="y">2023</span>.</li>
<li>Clipping: Cohen–Sutherland (lines, 4-bit region codes), Liang–Barsky, Sutherland–Hodgman (polygons).</li>
<li>Projections: <b>parallel</b> (orthographic: front, top, side views; oblique: cavalier, cabinet) vs <b>perspective</b> (vanishing points, realistic).</li>
<li>Colour: RGB additive (screens), CMY(K) subtractive (printing), HSV.</li>
<li>Shading: flat, Gouraud (interpolates intensity), Phong (interpolates normals); lighting = ambient + diffuse + specular. Hidden surfaces: Z-buffer, painter's algorithm, back-face culling.</li>
<li>Formats: JPEG (lossy, photos), <b>PNG</b> (lossless, transparency; standard for web export) <span class="y">2025</span>, GIF (256 colours, animation), SVG (vector); MP3, WAV, MIDI; MP4, AVI.</li>
<li>Photoshop: Image → <b>Adjustments</b> for brightness/contrast <span class="y">2025</span>; cutting and eraser tools remove parts of an image <span class="y">2025</span>.</li>
<li><b>Virtual reality</b>: computer-generated interactive simulation of real-world activities <span class="y">2023</span>.</li></ul>`,
probable: `<ul>
<li>Transformation, line or clipping algorithm by name; projection types.</li>
<li>Image format for a use; colour model for printing; basic Photoshop tools.</li></ul>`,
later: `<ul>
<li>Bezier and B-spline curves (a Bezier curve passes through its end control points); fractals; ray tracing.</li>
<li>Animation: key frames, tweening, morphing. Compression: lossy vs lossless (RLE, Huffman, LZW).</li></ul>`
},
{
id: "physics", part: "B", rank: 16, tier: "later", topics: ["Physics & electronics"],
title: "Physics & electronics",
freq: "≈ 2 questions per DoE paper",
must: `
<ul><li><b>LASER</b> = Light Amplification by Stimulated Emission of Radiation. Needs population inversion, a metastable level (≈ 10⁻³ s, vs ≈ 10⁻⁸ s for ordinary excited states) and a resonator. The <b>ground state</b> is stable, with effectively infinite lifetime <span class="y">2023</span>.</li>
<li>Lasers: ruby (solid, 694.3 nm, three-level), He–Ne (gas, 632.8 nm), <b>CO₂</b> (transitions between <b>vibrational</b> levels, 10.6 µm IR) <span class="y">2023</span>, Nd:YAG, semiconductor.</li>
<li>Only <b>transverse waves</b> can be polarised <span class="y">2023</span>. Methods: reflection (Brewster: tan θ<sub>p</sub> = μ), refraction, <b>double refraction</b> (calcite, quartz; retardation plates use it to create phase shifts <span class="y">2023</span>), scattering, Polaroid. Malus: I = I₀cos²θ.</li>
<li>Optical fibre: total internal reflection; core n₁ &gt; cladding n₂; NA = √(n₁² − n₂²).</li>
<li>n-type: pentavalent donors (P, As); p-type: trivalent acceptors (B, Al, Ga). Diode conducts when forward-biased; Zener regulates voltage; LED; photodiode; transistor as amplifier or switch.</li>
<li>n identical cells in series: emf nE, internal resistance nr, current I = nE ÷ (R + nr) <span class="y">2025</span>. A bar magnet and its equivalent solenoid have the same magnetic moment <span class="y">2025</span>.</li></ul>`,
probable: `<ul>
<li>Laser terms (population inversion, metastable state, laser types).</li>
<li>Polarisation facts and laws; semiconductor doping; a simple cell or circuit calculation.</li></ul>`,
later: `<ul>
<li>Young's double slit: fringe width β = λD ÷ d. Photoelectric effect E = hν; de Broglie λ = h ÷ p.</li>
<li>Superconductivity (zero resistance, Meissner effect); Hall effect; rectifiers (half-wave, full-wave, bridge).</li></ul>`
}
);
