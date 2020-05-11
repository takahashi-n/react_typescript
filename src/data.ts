export type Row = {
  id: string,
  age: string,
  answers: (number | null)[]
}
export type Rows = Row[]

export const rows: Rows = [
  {
    id: 'up20-up30',
    age: '20～30歳',
    answers: [0.18, 0.22, 0.37, 0.23]
  },
  {
    id: 'up30-up40',
    age: '30～40歳',
    answers: [0.13, 0.27, 0.42, 0.18]
  },
  {
    id: 'up50-up60',
    age: '50～60歳',
    answers: [null, null, null, null]
  }
]