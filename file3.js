"use strict";
const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];
class TransactionError extends Error { constructor(m){ super(m); this.name="TransactionError"; } }
class NegativeAmountError extends TransactionError { constructor(id){ super(`Transaction ${id} has negative amount`); this.name="NegativeAmountError"; } }
class MissingFieldError extends TransactionError { constructor(id, field){ super(`Transaction ${id || "unknown"} missing ${field}`); this.name="MissingFieldError"; } }
class NullEntryError extends TransactionError { constructor(idx){ super(`Null entry at index ${idx}`); this.name="NullEntryError"; } }
const valid = [];
const invalid = [];
console.log("=== Q3 Transaction Validator ===");
transactions.forEach((tx, idx) => {
  try {
    debugger;
    if (tx === null) throw new NullEntryError(idx);
    if (typeof tx !== "object") throw new TransactionError(`Invalid transaction type at index ${idx}`);
    if (!("id" in tx)) throw new MissingFieldError(null, "id");
    if (!("amount" in tx)) throw new MissingFieldError(tx.id, "amount");
    if (typeof tx.amount !== "number" || Number.isNaN(tx.amount)) throw new TransactionError(`Invalid amount type for id ${tx.id}`);
    if (tx.amount < 0) throw new NegativeAmountError(tx.id);
    valid.push(tx);
    console.log(`Processed transaction id=${tx.id} amount=${tx.amount}`);
  } catch (err) {
    invalid.push({ index: idx, type: err.name, message: err.message });
    console.log(`Failed transaction index=${idx} -> ${err.name}: ${err.message}`);
  }
});
console.log("Final report:");
console.log("Successful:", valid.length);
console.log("Failed:", invalid.length);
invalid.forEach((e,i)=> console.log(`${i+1}. index ${e.index} -> ${e.type}: ${e.message}`));
