export class QuestionAnswersDTO{
    //region fields
    private question!: String;
    private answer!: String;
    //endregion
 
    //region constructors
    public QuestionAnswersDTO(){
 
    }
    //endregion
 
    //region getters/setter
    public getQuestion(){
        return this.question;
    }

    public getAnswer(){
        return this.answer;
    }
    //setters not needed in current context
 
    //endregion
 
 }