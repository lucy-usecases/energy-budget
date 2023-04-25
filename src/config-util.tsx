import BundleConfig from '../bundle.json';
import { IContextProvider } from './uxp';

export async function assignWebServiceCredentials(uxpContext:IContextProvider,account:string,connector:string,payload:any) {
    let args = Object.assign({},payload,{WebServiceName:connector,AccountName:account});
    await uxpContext.executeService('Lucy','RESTAccount:CreateFromName',args,{json:true});
}
export async function completeInstallation(uxpContext:IContextProvider) {
    await uxpContext.executeService('Lucy','InstalledUseCase:MarkAsCompleted',{id:BundleConfig.id});
}