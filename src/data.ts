export const rows: Rows = [
  {
    id: 'up20-up30',
    generation: '20～30歳',
    answers: [0.18, 0.22, 0.37, 0.23]
  },
  {
    id: 'up30-up40',
    generation: '30～40歳',
    answers: [0.13, 0.27, 0.42, 0.18]
  }  
]

export type Row = {
  id: string,
  generation: string,
  answers: number[]
}
export type Rows = Row[]