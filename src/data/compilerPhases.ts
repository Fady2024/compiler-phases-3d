export interface CompilerPhase {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  color: string;
  position: [number, number, number];
  details: string[];
  inputCode?: string;
  outputCode?: string;
}

export const compilerPhases: CompilerPhase[] = [
  {
    id: "source",
    name: "Source Code",
    subtitle: "Input Program",
    description: "The original high-level program written by the developer.",
    color: "#22c55e",
    position: [-4, 2.5, 0],
    details: [
      "Written in High-Level Language",
      "Human-readable syntax",
      "Describes program logic",
      "Starting point of compilation"
    ],
    inputCode: `// Developer writes:
int main() {
  int x = 5 + 10;
  return x;
}`,
    outputCode: `// Passed to
// Lexical Analyzer`
  },
  {
    id: "lexical",
    name: "Lexical Analysis",
    subtitle: "Tokenization",
    description: "Converts the sequence of characters into a sequence of tokens.",
    color: "#3b82f6",
    position: [-4, 0.5, 0],
    details: [
      "Scans character stream",
      "Recognizes lexical patterns",
      "Creates tokens (lexemes)",
      "Filters whitespace & comments"
    ],
    inputCode: `int x = 5 + 10;`,
    outputCode: `<KEYWORD, int>
<ID, x>
<OP, =>
<NUM, 5>
<OP, +>
<NUM, 10>
<SEMICOLON, ;>`
  },
  {
    id: "syntax",
    name: "Syntax Analysis",
    subtitle: "Parsing",
    description: "Analyzes the grammatical structure and builds the Abstract Syntax Tree (AST).",
    color: "#ec4899",
    position: [0, 0.5, 0],
    details: [
      "Checks Grammar Rules",
      "Builds Parse Tree / AST",
      "Verifies structure",
      "Uses Context-Free Grammars"
    ],
    inputCode: `Tokens:
<KEYWORD,int> <ID,x> <OP,=>
<NUM,5> <OP,+> <NUM,10>
<SEMICOLON,;>`,
    outputCode: `AST (Parse Tree):
       [=]
      /   \\
   [x]    [+]
         /   \\
      [5]   [10]`
  },
  {
    id: "semantic",
    name: "Semantic Analysis",
    subtitle: "Type Checking",
    description: "Adds semantic meaning to AST: type checking, scope validation, and symbol resolution.",
    color: "#f97316",
    position: [4, 0.5, 0],
    details: [
      "Annotates AST with types",
      "Type Checking & Validation",
      "Symbol Table lookup",
      "Scope & Declaration checks"
    ],
    inputCode: `AST from Parser:
    [=]
   /   \\
 [x]   [+]
      /   \\
    [5]   [10]`,
    outputCode: `Annotated AST:
    [=]:int
   /        \\
[x]:int   [+]:int
         /      \\
    [5]:int  [10]:int

Symbol Table: x→int
✓ All type-safe`
  },
  {
    id: "intermediate",
    name: "Intermediate Code",
    subtitle: "IR Generation",
    description: "Generates a machine-independent intermediate representation.",
    color: "#8b5cf6",
    position: [4, -1.5, 0],
    details: [
      "3-Address Code (3AC)",
      "Machine Independent",
      "Simplified instructions",
      "Easier to optimize"
    ],
    inputCode: `From Semantic:
int x = 5 + 10;`,
    outputCode: `TAC (3-Address Code):
t1 = 5
t2 = 10
t3 = t1 + t2
x = t3`
  },
  {
    id: "optimization",
    name: "Code Optimization",
    subtitle: "Optimization",
    description: "Improves code efficiency by reducing size and execution time.",
    color: "#ef4444",
    position: [0, -1.5, 0],
    details: [
      "Constant Folding",
      "Dead Code Elimination",
      "Loop Optimization",
      "Reduces resource usage"
    ],
    inputCode: `Before Optimization:
t1 = 5
t2 = 10
t3 = t1 + t2
x = t3`,
    outputCode: `After Optimization:
// Constant folding applied
x = 15

(Eliminated: t1, t2, t3)`
  },
  {
    id: "codegen",
    name: "Code Generation",
    subtitle: "Assembly",
    description: "Translates the optimized IR into target-specific assembly code.",
    color: "#3b82f6",
    position: [-4, -1.5, 0],
    details: [
      "Instruction Selection",
      "Register Allocation",
      "Memory Management",
      "Target-specific (e.g., x86, ARM)"
    ],
    inputCode: `Optimized IR:
x = 15`,
    outputCode: `Assembly (ARM):
MOV R0, #15    ; Load 15
STR R0, [x]    ; Store to x`
  },
  {
    id: "executable",
    name: "Executable Code",
    subtitle: "Binary",
    description: "The final binary file ready to be executed by the machine.",
    color: "#22c55e",
    position: [-4, -3.5, 0],
    details: [
      "Binary Format (ELF/PE)",
      "Linker Resolution",
      "Machine Code",
      "Ready to Run"
    ],
    inputCode: `Assembly:
MOV R0, #15
STR R0, [x]`,
    outputCode: `Binary (ELF):
7F 45 4C 46 02 01 01 00
E3 A0 00 0F E5 9F 00 04
...
(Executable machine code)`
  }
];

export const connections = [
  { from: "source", to: "lexical" },
  { from: "lexical", to: "syntax" },
  { from: "syntax", to: "semantic" },
  { from: "semantic", to: "intermediate" },
  { from: "intermediate", to: "optimization" },
  { from: "optimization", to: "codegen" },
  { from: "codegen", to: "executable" },
];
