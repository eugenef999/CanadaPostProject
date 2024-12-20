import express from 'express';
import cors from "cors";
import axios from 'axios';

const app = express();

app.use(cors());

app.get('/api/v1/:zipCode', async (req, res) =>{
  //We make a call to Canada Post's AddressComplete API, with the given ZIP code as the "SearchTerm"
  //see https://www.canadapost-postescanada.ca/ac/support/api/ for details on the API

  var url = 'https://ws1.postescanada-canadapost.ca/AddressComplete/Interactive/Find/v2.10/json3.ws?&Key=BT94-NA64-AZ95-WR41';
      try {
        url+='&SearchTerm='+req.params.zipCode;
        const responseToSearch = await axios.get(url);
        url += '&LastId='+ responseToSearch.data.Items[0].Id;
        const responseToSerchById = await axios.get(url);
        var addresses = responseToSerchById.data.Items;
        return res.status(200).json({addresses});
      } catch (error) {
        throw error;
      }

})

app.listen(5000, () => console.log('App listening on port 5000!'));