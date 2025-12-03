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
    subtitle: "Input",
    description: "The original program written by the programmer in a high-level language.",
    color: "#22c55e",
    position: [-4, 2.5, 0],
    details: [
      "Human-readable code",
      "High-level language syntax",
      "Entry point of compilation"
    ],
    inputCode: `// Developer writes:
int main() {
  int x = 5;
  int y = x + 10;
  return y;
}`,
    outputCode: `// Same code passed to
// Lexical Analyzer`
  },
  {
    id: "lexical",
    name: "Lexical Analysis",
    subtitle: "Tokenization",
    description: "Breaks the source code into tokens - the smallest meaningful units.",
    color: "#3b82f6",
    position: [-4, 0.5, 0],
    details: [
      "Scanner/Tokenizer",
      "Identifies keywords, identifiers",
      "Removes whitespace & comments",
      "Generates token stream"
    ],
    inputCode: `int x = 5 + 10;`,
    outputCode: `<KEYWORD, int>
<ID, x>
<ASSIGN, =>
<NUM, 5>
<OP, +>
<NUM, 10>
<SEMICOLON, ;>`
  },
  {
    id: "syntax",
    name: "Syntax Analysis",
    subtitle: "Parse Tree",
    description: "Analyzes the token stream to build a parse tree based on grammar rules.",
    color: "#ec4899",
    position: [0, 0.5, 0],
    details: [
      "Parser component",
      "Grammar validation",
      "Builds Abstract Syntax Tree",
      "Detects syntax errors"
    ],
    inputCode: `Tokens:
int, x, =, 5, +, 10, ;`,
    outputCode: `    [=]
   /   \\
 [x]   [+]
      /   \\
    [5]   [10]`
  },
  {
    id: "semantic",
    name: "Semantic Analysis",
    subtitle: "Type Checking",
    description: "Checks for semantic consistency and type correctness.",
    color: "#f97316",
    position: [4, 0.5, 0],
    details: [
      "Type checking",
      "Symbol table management",
      "Scope resolution",
      "Semantic error detection"
    ],
    inputCode: `Symbol Table:
| Name | Type | Scope |
|------|------|-------|
| x    | int  | main  |`,
    outputCode: `✓ Type check: int + int → int
✓ Variable x declared
✓ Assignment compatible
✓ No semantic errors`
  },
  {
    id: "intermediate",
    name: "Intermediate Code",
    subtitle: "Abstract Code",
    description: "Generates platform-independent intermediate representation.",
    color: "#8b5cf6",
    position: [4, -1.5, 0],
    details: [
      "Three-address code",
      "Platform independent",
      "Easier to optimize",
      "Portable representation"
    ],
    inputCode: `x = 5 + 10`,
    outputCode: `t1 = 5
t2 = 10
t3 = t1 + t2
x = t3`
  },
  {
    id: "optimization",
    name: "Code Optimization",
    subtitle: "Performance",
    description: "Improves the intermediate code for better performance.",
    color: "#ef4444",
    position: [0, -1.5, 0],
    details: [
      "Dead code elimination",
      "Loop optimization",
      "Constant folding",
      "Register allocation"
    ],
    inputCode: `t1 = 5
t2 = 10
t3 = t1 + t2
x = t3`,
    outputCode: `// Constant folding:
x = 15`
  },
  {
    id: "codegen",
    name: "Code Generation",
    subtitle: "Machine Code",
    description: "Translates optimized code into target machine code.",
    color: "#3b82f6",
    position: [-4, -1.5, 0],
    details: [
      "Target architecture specific",
      "Instruction selection",
      "Memory management",
      "Assembly generation"
    ],
    inputCode: `x = 15`,
    outputCode: `MOV R1, #15
STORE R1, [x]`
  },
  {
    id: "executable",
    name: "Executable Code",
    subtitle: "Output",
    description: "The final machine-executable binary ready to run.",
    color: "#22c55e",
    position: [-4, -3.5, 0],
    details: [
      "Binary format",
      "Machine-executable",
      "Platform specific",
      "Ready for execution"
    ],
    inputCode: `Assembly:
MOV R1, #15
STORE R1, [x]`,
    outputCode: `Binary:
0x7F 0x45 0x4C 0x46
0x02 0x01 0x01 0x00
...executable`
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
