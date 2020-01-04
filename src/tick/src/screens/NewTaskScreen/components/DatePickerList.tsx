import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Text, Icon } from 'react-native-ui-kitten';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { color } from 'src/config/theme';

interface Props {
  onGetDateList?: Function;
  reset?: boolean;
}

const DatePickerList: React.FC<Props> = ({ onGetDateList, reset }) => {
  const [dueDate, setDueDate] = useState(new Date());
  const [reminderDate, setReminderDate] = useState(new Date());
  const [showDueDate, setShowDueDate] = useState(false);
  const [showReminderDate, setShowReminderDate] = useState(false);

  useEffect(() => {
    setDueDate(new Date());
    setReminderDate(new Date());
  }, [reset]);
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => setShowDueDate(!showDueDate)}>
        <View style={{ ...styles.dateContainer, marginRight: 5 }}>
          <Text style={styles.label} category='label'>
            Set due date
          </Text>
          <View style={styles.dateContent}>
            <Icon
              style={styles.icon}
              name='clock-outline'
              width={24}
              height={24}
              fill={color.secondary}
            />
            <View style={styles.textGroup}>
              <Text style={{ color: color.secondary }}>
                {moment(dueDate).format('MMM Do YYYY')}
              </Text>
              <Text style={{ color: color.secondary }} category='p2'>
                {moment(dueDate).format('hh:mm:ss A')}
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => setShowReminderDate(!showReminderDate)}
      >
        <View style={{ ...styles.dateContainer, marginLeft: 5 }}>
          <Text style={styles.label} category='label'>
            Set reminder date
          </Text>
          <View style={styles.dateContent}>
            <Icon
              style={styles.icon}
              name='bell-outline'
              width={24}
              height={24}
              fill={color.secondary}
            />
            <View style={styles.textGroup}>
              <Text style={{ color: color.secondary }}>
                {moment(reminderDate).format('MMM Do YYYY')}
              </Text>
              <Text style={{ color: color.secondary }} category='p2'>
                {moment(reminderDate).format('hh:mm:ss A')}
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <DateTimePicker
        date={dueDate}
        mode='datetime'
        onConfirm={(date: any) => {
          setShowDueDate(!showDueDate);
          setDueDate(date);
        }}
        onCancel={() => setShowDueDate(!showDueDate)}
        onHideAfterConfirm={() => onGetDateList(dueDate, reminderDate)}
        isVisible={showDueDate}
      />
      <DateTimePicker
        date={reminderDate}
        mode='datetime'
        onConfirm={(date: any) => {
          setShowReminderDate(!showReminderDate);
          setReminderDate(date);
        }}
        onCancel={() => setShowReminderDate(!showReminderDate)}
        onHideAfterConfirm={() => onGetDateList(dueDate, reminderDate)}
        isVisible={showReminderDate}
      />
    </View>
  );
};

DatePickerList.defaultProps = {
  onGetDateList: () => {},
  reset: false
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  dateContainer: {
    display: 'flex',
    flex: 1
  },
  dateContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    borderColor: 'rgba(7,104,159,0.2)',
    borderWidth: 1,
    borderStyle: 'dashed',
    padding: 12,
    backgroundColor: '#fff'
  },
  textGroup: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1
  },
  icon: {
    marginRight: 10
  },
  label: {
    marginBottom: 10,
    marginTop: 20
  }
});

export default DatePickerList;
