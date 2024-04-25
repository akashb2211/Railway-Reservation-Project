import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Modal, SafeAreaView, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useEffect, useState } from 'react';

const App = () => {

  const [data, setdata] = useState([]);
  const [modaltrain, setmodaltrain] = useState(false);
  const [train_number, settrainumber] = useState(null);
  const [train_name, settrain_name] = useState("")
  const [source, setsource] = useState("")
  const [destination, setdestination] = useState("")
  const [classtype, setclasstype] = useState("")
  const [train_time, settrain_time] = useState("")
  const [train_date, settrain_date] = useState("")
  const [running_days, setrunning_days] = useState("")
  const [halt_time, sethalt_time] = useState("")
  const [distance, setdistance] = useState("")



  useEffect(() => {

    getlisttrain();

  }, [])

  // const getlisttrain =async()=>{
  //   const url="http://localhost:4000/train/";
  //   let result=await fetch(url);
  //   result=await result.json();
  //   setdata(result);
  const getlisttrain = () => {
    fetch("http://192.168.4.107:4000/train", {
      method: "GET"
    }).then(result => {
      return result.json()
    }).then(result => {
      //console.log(result)
      // console.log(error)
      // console.warn(error)
      if (result) {
        setdata(result.data)
      }
    }).catch(error => {
      console.log(error)
    })


  }

  const handeldelete = (train_number) => {
    const url = "http://192.168.4.107:4000/train/canceltrain";
    //console.warn(`${url}/${train_number}`);
    fetch(`${url}/${train_number}`, {
      method: "DELETE"
    })
      .then(result => {
        return result.json()
      }).then(result => {
        getlisttrain();

      }).catch(error => {
        console.log(error)
      })


  }

  const handeladd = () => {
    setmodaltrain(true)


  }
  const handelclosemodal = () => {
    setmodaltrain(false)
  }

  const handelsaveemodal = () => {


    fetch("http://192.168.4.107:4000/train/addtrain", {
      method: "POST",
      body: JSON.stringify({
        "train_number": train_number,
        "train_name": train_name,
        "source": source,
        "destination": destination,
        "classtype": classtype,
        "train_time": train_time,
        "train_date": train_date,
        "running_days": running_days,
        "halt_time": halt_time,
        "distance": distance,

      }),
      headers: {

        'Content-Type': 'application/json'
      }
    }).then(result => {
      return result.json()
    }).then(result => {
      getlisttrain();
      setmodaltrain(false);
      clearform();
    }).catch(error => {

      console.log(error)
    })



  }


  const clearform = () => {

    settrain_name("")
    setsource("")
    setdestination("")
    setclasstype("")
    settrain_time("")
    settrain_date("")
    setrunning_days("")
    sethalt_time("")
    setdistance("")
    settrainumber(null)
  }


  const handelupdate = (item) => {

    settrainumber(item.train_number)
    settrain_name(item.train_name)
    setsource(item.source)
    setdestination(item.destination)
    setclasstype(item.classtype)
    settrain_time(item.train_time)

    settrain_date(item.train_date)
    setrunning_days(item.running_days)
    sethalt_time(item.halt_time)
    setdistance(item.distance)
    setmodaltrain(true)
  }

  const handelupdmodal = () => {


    console.warn("updateclicke");

    fetch("http://192.168.4.107:4000/train/record/", {
      method: "PUT",
      body: JSON.stringify({
        "train_number": train_number,
        "train_name": train_name,
        "source": source,
        "destination": destination,
        "classtype": classtype,
        "train_time": train_time,
        "train_date": train_date,
        "running_days": running_days,
        "halt_time": halt_time,
        "distance": distance,

      }),
      headers: {

        'Content-Type': 'application/json'
      }
    }).then(result => {
      return result.json()
    }).then(result => {
      getlisttrain();
      setmodaltrain(false);
      clearform();
    }).catch(error => {
      console.log(error)
    })

  }


  return (
    <SafeAreaView>
      <Modal
        visible={modaltrain}>
        <SafeAreaView>
          <View style={[styles.rowbeetween, { paddingHorizontal: 10 }]}>
            <Text style={styles.txtclose}>New Train</Text>
            <TouchableOpacity onPress={handelclosemodal}>
              <Text style={styles.txtclose}>Close</Text>

            </TouchableOpacity>
          </View>
          <ScrollView style={{ paddingHorizontal: 5, marginTop: 10 }}>
            <Text>train_number</Text>

            <TextInput
              style={styles.txtinput}
              placeholder={"trainnumber"}
              value={train_number}
              onChangeText={(text) => {
                settrainumber(text)
              }}
            />
            <Text>train_name</Text>
            <TextInput style={styles.txtinput}
              placeholder={"train name"}
              value={train_name}
              onChangeText={(text) => {
                settrain_name(text)
              }}
            />

            <Text>source</Text>
            <TextInput style={styles.txtinput}
              placeholder={"source"}
              value={source}
              onChangeText={(text) => {
                setsource(text)
              }}
            />

            <Text>destination</Text>
            <TextInput style={styles.txtinput}
              placeholder={"destination"}
              value={destination}
              onChangeText={(text) => {
                setdestination(text)
              }}
            />


            <Text>classtype</Text>
            <TextInput style={styles.txtinput}
              placeholder={"classtype"}
              value={classtype}
              onChangeText={(text) => {
                setclasstype(text)
              }}
            />


            <Text>train_time</Text>
            <TextInput style={styles.txtinput}
              placeholder={"train_time"}
              value={train_time}
              onChangeText={(text) => {
                settrain_time(text)
              }}
            />


            <Text>train_date</Text>
            <TextInput style={styles.txtinput}
              placeholder={"train_date"}
              value={train_date}
              onChangeText={(text) => {
                settrain_date(text)
              }}
            />


            <Text>running_days</Text>
            <TextInput style={styles.txtinput}
              placeholder={"running_days"}
              value={running_days}
              onChangeText={(text) => {
                setrunning_days(text)
              }}
            />


            <Text>halt_time</Text>
            <TextInput style={styles.txtinput}
              placeholder={"halt_time"}
              value={halt_time}
              onChangeText={(text) => {
                sethalt_time(text)
              }}
            />



            <Text>distance</Text>
            <TextInput style={styles.txtinput}
              placeholder={"distance"}
              value={distance}
              onChangeText={(text) => {
                setdistance(text)
              }}
            />

            <TouchableOpacity onPress={handelsaveemodal} style={styles.btncontainer1}>
              <Text style={styles.txtclose}>Save</Text>

            </TouchableOpacity>



            <TouchableOpacity onPress={handelupdmodal} style={styles.btncontainer2}>
              <Text style={styles.txtclose}>UpdateData</Text>

            </TouchableOpacity>

          </ScrollView>
        </SafeAreaView>
      </Modal>




      <View style={styles.rowbeetween}>
        <Text style={styles.textmain}>Train List{data.length}</Text>
        <TouchableOpacity style={{ padding: 10 }} onPress={handeladd}>
          <Text style={{ color: 'blue', paddingTop: 30, fontWeight: 'bold' }}>ADD TRAIN</Text>

        </TouchableOpacity>
      </View>

      <ScrollView>
        {data.map((item, index) => {
          return (
            <View style={styles.rowbeetween}>
              <View style={styles.text} key={index}>

                <Text style={styles.texno}>train_number {item.train_number}</Text>
                <Text style={styles.texnormal} > train_name:{item.train_name}</Text>
                <Text style={styles.texnormal} > source:{item.source}</Text>
                <Text style={styles.texnormal} > destination:{item.destination}</Text>
                <Text style={styles.texnormal} > train_time:{item.train_time}</Text>
                <Text style={styles.texnormal} > train_date:{item.train_date}</Text>
                <Text style={styles.texnormal} > running_days:{item.running_days}</Text>
                <Text style={styles.texnormal} > halt_time:{item.halt_time}</Text>
                <Text style={styles.texnormal}> distance:{item.distance}</Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => handeldelete(item.train_number)}>
                  <Text style={styles.delete} >Delete</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handelupdate(item)}>
                  <Text style={styles.update} >Update</Text>
                </TouchableOpacity>


              </View>

            </View>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}


export default App;




const styles = StyleSheet.create({
  flex: 1,
  container: {
    backgroundColor: '#ffff'
   // backgroundColor: 'skyblue',
  },

  rowbeetween: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingVertical: 10,
    backgroundColor:'lightyellow',
    borderBottomWidth: 3,
    


  },

  txtinput: {
    padding: 5,

    borderWidth: 1,
    borderColor: 'black',
    marginTop: 5,

  },

  txtclose: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 0.5,
  }
  ,
  textmain: {
    paddingTop: 20,
    fontSize: 30,
    //backgroundColor: 'skyblue',
    fontWeight: 'bold',
  },
  text:
  {
    paddingTop: 30,
    fontSize: 50,
    fontWeight: 'bold',
  },
  update: {
    paddingTop: 20,
    color: 'blue',
    fontWeight:"bold", 
  },

  texno:
  {
    paddingTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  },
  texnormal:
  {
    color: 'blue',
    

  },
  btncontainer1: {
    borderWidth: 0.05,
    borderColor: "red",
    padding: 20,

    paddingVertical: 0.1,
    textAlign: 'center',
    backgroundColor: 'red',
    alignItems: 'center'
  }
  ,
  btncontainer2: {
    borderWidth: 0.05,
    borderColor: "gray",
    padding: 20,

    paddingVertical: 0.1,
    textAlign: 'center',
    backgroundColor: 'black',
    alignItems: 'center'
  }
  ,
  delete:
  {
    color: 'red',
    fontWeight:"bold",
    paddingRight:10,
  },

})
