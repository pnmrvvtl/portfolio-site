export default interface EducationItem {
  schoolName: string
  specialtyName: string
  startDate: string
  finishDate: string
  classes: string[]
  document: string
  graduationProject: {
    title: string
    description: string
    link: string
    usedStack: string[]
  }
}
