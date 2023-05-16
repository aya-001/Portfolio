public with sharing class NoteTakingController {
    
    //method to make a record
    @AuraEnabled
    public static Boolean creatNotRecord(String title, String description){
        try{
            //if title is filled, Create a Record
            //then return True
            if(!String.isBlank(title)){
                My_Note__c noteRecord = new My_Note__c(	Name = title, Note_Descriptions__c = description);
                insert noteRecord;
                System.debug('Insert record');
                return true;
            }
            //if title is not filled, return false
            return false;

        } catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }
}