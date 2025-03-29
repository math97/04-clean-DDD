import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

export class InMemoryAnswersRepository implements AnswersRepository {
  public answers: Answer[] = []

  async create(answer: Answer) {
    this.answers.push(answer)
  }

  async save(answer: Answer) {
    const itemIndex = this.answers.findIndex((item) => item.id === answer.id)

    this.answers[itemIndex] = answer
  }

  async findById(id: string) {
    const answer = this.answers.find((item) => item.id.toString() === id)

    if (!answer) {
      return null
    }

    return answer
  }

  async delete(answer: Answer) {
    const itemIndex = this.answers.findIndex((item) => item.id === answer.id)

    this.answers.splice(itemIndex, 1)
  }
}
